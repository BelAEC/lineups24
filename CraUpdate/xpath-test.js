const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(`<div><p>Hello XPath</p></div>`);

    const found = await page.waitForXPath('//p');
    console.log('✅ XPath found:', !!found);

    await browser.close();
})();
