import puppeteer from "puppeteer";
import fs from "fs";
const pushList = require('./pushList');
// import { login } from "./craUpdate1.js"; // adjust path if needed
async function login(page) {
    try {
        // Navigate to login page
        await page.goto('https://tfim.tenniscores.com/?mod=nndz-T25udW1PQT0%3D'); // Replace with your login URL
        
        // Wait for login form elements
         await page.waitForSelector('#USERNAME');
         await page.waitForSelector('#PASSWD');
        
        // Fill in credentials
         await page.type('#USERNAME', 'brigittesthilaire1@gmail.com'); // Replace with your username
        await page.type('#PASSWD', 'TFIM13!!');  // Replace with your password
        
        // Submit login form
          await page.click('.ourbutton');
                
      //  await page.waitForNavigation();
       

        console.log('Login successful');
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}
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

        // ✅ Go to the correct team roster page
        await page.goto(
            "https://tfim.tenniscores.com/?mod=nndz-TjNMa21PQ1d3ZEJJa2lBYVN0ND0%3D",
            { waitUntil: "domcontentloaded" }
        );

        await page.click('.teams-tab[data-target="roster"]');

        // Wait for roster to appear
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

        // 🧾 Read match header cells
        const headers = await page.$$eval("#roster table thead tr th", (ths) =>
            ths.map((th) => ({
                className: th.className,
                text: th.textContent.trim(),
            }))
        );
        console.log("🔍 Detected header cells:");
        console.table(headers);

        // 🗓️ Find which .match_X corresponds to the NEXT Friday
        function getNextFridayMatchIndex(headers) {
            const now = new Date();
            const day = now.getDay(); // 0 = Sun, 5 = Fri
            const hours = now.getHours();

            // Move to next Friday if after noon
            let daysUntilFriday = (5 - day + 7) % 7;
            if (daysUntilFriday === 0 && hours >= 12) daysUntilFriday = 7;

            const nextFriday = new Date(now);
            nextFriday.setDate(now.getDate() + daysUntilFriday);

            const formattedNextFriday = `${String(nextFriday.getMonth() + 1).padStart(2, "0")}/${String(nextFriday.getDate()).padStart(2, "0")}`;
            console.log(`📅 Looking for next Friday: ${formattedNextFriday}`);

            const match = headers.find((h) => h.text === formattedNextFriday);
            if (!match) {
                console.warn("⚠️ Could not find header for next Friday, defaulting to match_0");
                return 0;
            }

            const matchIndex = parseInt(match.className.replace("match_", ""));
            return matchIndex;
        }

        const matchIndex = getNextFridayMatchIndex(headers);
        const matchClass = `.match_${matchIndex}`;
        console.log(`🎯 Checking availability for: ${matchClass}`);

        // 🎾 Get all rows (odd positions only)
        const rows = await page.$$(
            'xpath=//*[@id="roster"]/section/table/tbody/tr[position() mod 2 = 1 and position() <= 33]'
        );

        const data = [];

        for (const row of rows) {
            const nameHandle = await row.$("td span");
            const crasHandle = await row.$("td:nth-child(2)");

            const name = nameHandle
                ? await page.evaluate((el) => el.textContent.trim(), nameHandle)
                : "N/A";
            const crasText = crasHandle
                ? await page.evaluate((el) => el.textContent.trim(), crasHandle)
                : "0";
            const cras = parseFloat(crasText) || 0;

            // ✅ Detect green span (availability)
            // 🔍 Find availability cell for the correct match_X
const availabilityCell = await row.$(matchClass);
let available = false;

if (availabilityCell) {
    available = await page.evaluate(cell => {
        // Look for nested spans
        const innerSpan = cell.querySelector("span.medium span");
        if (!innerSpan) return false;

        const color = window.getComputedStyle(innerSpan).color;
        return color.includes("rgb(0, 128, 0)") || color.includes("green");
    }, availabilityCell);
}


            if (available) {
                data.push({ name, cras });
            }
        }

        // ✍️ Write available players to file
        const listAvailable = data.map((item) => `${item.name} ${item.cras}`);
        fs.writeFileSync("listAvailable.txt", listAvailable.join(" "), "utf-8");

        console.log("✅ listAvailable.txt written successfully.");

        if (data.length === 0)
            console.log("⚠️ No available players found for next Friday.");
        else console.log("✅ Available players:", listAvailable);

        await browser.close();
        return data;
    } catch (error) {
        console.error("❌ Error in fetchAvailable:", error);
        throw error;
    }
}

// Run standalone
fetchAvailable();
