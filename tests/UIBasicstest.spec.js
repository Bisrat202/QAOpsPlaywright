const {test, expect} = require('@playwright/test');


test('Broswer ontest Playwright test', async ({ browser}) => 
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());  
 //css and Xpath are the two selectors used in Playwright for locating elements on a page
 await page.locator('#username').fill("rahulshetty");
await page.locator("[type='password']").fill("learning");
 await page.locator('#signInBtn').click(); 
 console.log(await page.locator ("[style*='block']").textContent()); // Example of using a CSS selector

});

test('Page Playwright test', async ({page}) => 
{

  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google"); 
  console.log(await page.title()); 
 

});
