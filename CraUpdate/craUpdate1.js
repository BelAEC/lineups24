const puppeteer = require('puppeteer');
const fs = require('fs');
//const StealthPlugin = require('puppeteer-extra-plugin-stealth');
//puppeteer.use(StealthPlugin());

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
async function fetchAvailable(){
    const browser = await puppeteer.launch({ headless: false, args:['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await login(page);
        const currentUrl = page.url();
            
        if (currentUrl.includes('login')) {
            throw new Error('Login failed - still on login page');
        }
     await page.goto('https://tfim.tenniscores.com/?mod=nndz-TjNMa21PQ1d3ZEJJa2lBYVN0ND0%3D', { waitUntil: 'domcontentloaded' });
     await page.click('.teams-tab[data-target="roster"]');
            const maxRetries = 3;
        let retryCount = 0;
        let selectorFound = false;

        while (!selectorFound && retryCount < maxRetries) {
            try {
               await page.waitForSelector('xpath=//*[@id="roster"]/section/table/tbody/tr[1]', { timeout: 30000 });

               
                selectorFound = true;
                console.log('Roster table found');
            } catch {
                retryCount++;
                console.log(`Attempt ${retryCount}/${maxRetries}: Retrying...`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }

        if (!selectorFound) {
            throw new Error('Failed to find roster table');
        }

        // XPath: odd rows from 1 to 33 (i.e., 1,3,5,...,33)
 const rows = await page.$$('xpath=//*[@id="roster"]/section/table/tbody/tr[position() mod 2 = 1 and position() <= 33]');
 const data = [];

        for (const row of rows) {
            const nameHandle = await row.$('td span');
            const crasHandle = await row.$('td:nth-child(2)');
         
            const name = nameHandle ? (await page.evaluate(el => el.textContent.trim(), nameHandle)) : 'N/A';
            const crasText = crasHandle ? (await page.evaluate(el => el.textContent.trim(), crasHandle)) : '0';
            
            const cras = parseFloat(crasText) || 0;
         //   const available = availabilityHandle ? (await)
            data.push({ name, cras });
        }

}
async function fetchData() {
    try {
        const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await login(page);
          const currentUrl = page.url();
        if (currentUrl.includes('login')) {
            throw new Error('Login failed - still on login page');
        }
    
     await page.goto('https://tfim.tenniscores.com/?mod=nndz-TjNMa21PQ1d3ZEJJa2lBYVN0ND0%3D', { waitUntil: 'domcontentloaded' });
     await page.click('.teams-tab[data-target="roster"]');
     await page.waitForSelector('#roster', { visible: true });
     await page.waitForSelector('xpath=//*[@id="roster"]/section/table/tbody/tr[1]', { timeout: 30000 });
        
        
    await page.waitForSelector('#roster', { visible: true });
    await page.waitForSelector('xpath=//*[@id="roster"]/section/table/tbody/tr[1]', { timeout: 30000 });
       
        const maxRetries = 3;
        let retryCount = 0;
        let selectorFound = false;

        while (!selectorFound && retryCount < maxRetries) {
            try {
               await page.waitForSelector('xpath=//*[@id="roster"]/section/table/tbody/tr[1]', { timeout: 30000 });

               
                selectorFound = true;
                console.log('Roster table found');
            } catch {
                retryCount++;
                console.log(`Attempt ${retryCount}/${maxRetries}: Retrying...`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }

        if (!selectorFound) {
            throw new Error('Failed to find roster table');
        }

        // XPath: odd rows from 1 to 33 (i.e., 1,3,5,...,33)
const rows = await page.$$('xpath=//*[@id="roster"]/section/table/tbody/tr[position() mod 2 = 1 and position() <= 33]');

        const data = [];

        for (const row of rows) {
            const nameHandle = await row.$('td span');
            const crasHandle = await row.$('td:nth-child(2)');
          //  const availabilityHandle = await row.$('td:nth-child(')
            const name = nameHandle ? (await page.evaluate(el => el.textContent.trim(), nameHandle)) : 'N/A';
            const crasText = crasHandle ? (await page.evaluate(el => el.textContent.trim(), crasHandle)) : '0';
            
            const cras = parseFloat(crasText) || 0;
         //   const available = availabilityHandle ? (await)
            data.push({ name, cras });
        }

        const names = data.map(item => item.name);
        const cras = data.map(item => item.cras);

        console.log('names:', names);
        console.log('cras:', cras);
        const list = names.map((name, i) => `${name} ${cras[i]}`);

console.log("list = ", list);
fs.writeFileSync('list.txt', list.join(' '), 'utf-8');
console.log('✅ list.txt written successfully.');

//console.log(arraynamesinTAesNewCras);


        await browser.close();
        return { names, cras };

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Run the function
fetchData();
