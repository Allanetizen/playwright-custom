const playwright = require("playwright");

(async () => {
  //code execution here
  const browser = await playwright["chromium"].launch({
    headless: false,
  });

  //context
  const context = await browser.newContext();

  //page
  const page = await context.newPage();

  //navigate to page
  await page.goto("https://the-internet.herokuapp.com/abtest");
  //screenshot
  // await page.screenshot({path: `ea-${Date.now}.png`})
  //testing for the page text
  // Click text=A/B Test Control
  await page.locator('.example').click();
  // Click text=Also known as split testing.
  await page.locator('').click();

  await expect(page.locator(".example")).toHaveText("A/B Test Control");
  //close
  await browser.close();
})();
