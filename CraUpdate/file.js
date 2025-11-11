import puppeteer from "puppeteer";
import fs from "fs";
// import { login } from "./login.js"; // adjust path if needed

async function fetchAvailable() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await login(page);

    const currentUrl = page.url();
    if (currentUrl.includes("login")) {
      throw new Error("Login failed - still on login page");
    }

    // Navigate to roster page
    await page.goto(" await page.goto('https://tfim.tenniscores.com/?mod=nndz-TjNMa21PQ1d3ZEJJa2lBYVN0ND0%3D', { waitUntil: 'domcontentloaded' });", { waitUntil: "domcontentloaded" });
    await page.click('.teams-tab[data-target="roster"]');

    // Wait for roster table to load
    let selectorFound = false;
    const maxRetries = 3;
    let retryCount = 0;

    while (!selectorFound && retryCount < maxRetries) {
      try {
        await page.waitForSelector(
          'xpath=//*[@id="roster"]/section/table/tbody/tr[1]',
          { timeout: 30000 }
        );
        selectorFound = true;
        console.log("Roster table found");
      } catch {
        retryCount++;
        console.log(`Attempt ${retryCount}/${maxRetries}: Retrying...`);
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
    if (!selectorFound) throw new Error("Failed to find roster table");

    // 📋 Inspect headers in the table
    const headers = await page.$$eval(
      "#roster table thead tr th",
      (ths) =>
        ths.map((th) => ({
          className: th.className,
          text: th.textContent.trim(),
        }))
    );

    console.log("🔍 Detected header cells:");
    console.table(headers);

    // 🧭 Find the header (.match_X) that matches next Friday’s date
    function getNextFridayString() {
      const today = new Date();
      const day = today.getDay(); // 0 = Sunday
      const diff = (5 - day + 7) % 7 || 7; // days until next Friday
      const nextFriday = new Date(today);
      nextFriday.setDate(today.getDate() + diff);
      const mm = String(nextFriday.getMonth() + 1).padStart(2, "0");
      const dd = String(nextFriday.getDate()).padStart(2, "0");
      return `${mm}/${dd}`; // format same as headers (MM/DD)
    }

    const nextFridayStr = getNextFridayString();
    console.log(`📅 Looking for next Friday: ${nextFridayStr}`);

    // Find header with text matching next Friday (MM/DD)
    const matchHeader = headers.find((h) => h.text.includes(nextFridayStr));

    const matchClass = matchHeader
      ? `.${matchHeader.className}`
      : (() => {
          console.warn("⚠️ Could not find matching Friday header, defaulting to match_0");
          return ".match_0";
        })();

    console.log(`🎯 Checking availability for: ${matchClass}`);

    // 🎾 Loop through rows (odd positions only)
    const rows = await page.$$(
      'xpath=//*[@id="roster"]/section/table/tbody/tr[position() mod 2 = 1 and position() <= 33]'
    );

    const data = [];

    for (const row of rows) {
      // Player name & CRAS
      const nameHandle = await row.$("td span");
      const crasHandle = await row.$("td:nth-child(2)");

      const name = nameHandle
        ? await page.evaluate((el) => el.textContent.trim(), nameHandle)
        : "N/A";
      const crasText = crasHandle
        ? await page.evaluate((el) => el.textContent.trim(), crasHandle)
        : "0";
      const cras = parseFloat(crasText) || 0;

      // 🔍 Check if the match cell contains a green span (available)
      const availabilityCell = await row.$(matchClass);
      let available = false;

      if (availabilityCell) {
        available = await page.evaluate((cell) => {
          const span = cell.querySelector("span");
          if (!span) return false;
          const color = window.getComputedStyle(span).color;
          return color.includes("green");
        }, availabilityCell);
      }

      if (available) {
        data.push({ name, cras });
      }
    }

    // ✍️ Write available players to file
    const list = data.map((item) => `${item.name} ${item.cras}`);
    fs.writeFileSync("listAvailable.txt", list.join(" "), "utf-8");

    console.log("✅ listAvailable.txt written successfully.");
    if (list.length > 0)
      console.log("Available players:", list);
    else
      console.log(`⚠️ No available players found for ${nextFridayStr}.`);

    await browser.close();
    return data;
  } catch (error) {
    console.error("❌ Error in fetchAvailable:", error);
    throw error;
  }
}

// Run standalone
fetchAvailable();
