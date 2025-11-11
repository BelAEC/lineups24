const puppeteer = require('puppeteer');
const fs = require('fs');
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
        await page.waitForNavigation();

        console.log('Login successful');
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}
