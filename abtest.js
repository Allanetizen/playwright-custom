const playwright = require('playwright');

(async ()=>{

    //code execution here
    const browser = await playwright["chromium"].launch({
        headless: false
    }    )

    //context
    const context = await browser.newContext();



    //page
    const page = await context.newPage();

    //navigate to page
    await page.goto("https://the-internet.herokuapp.com/abtest")
    //screenshot
    await page.screenshot({path: `ea-${Date.now}.png`})
    //close
    await browser.close();



})();