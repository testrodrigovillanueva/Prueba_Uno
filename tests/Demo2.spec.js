// @ts-check
const { test, expect } = require('@playwright/test');

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
test('test', async ({ page }) => {
  
  await page.goto('https://demoqa.com/text-box');
  await page.locator("//input[contains(@id,'userName')]").click();
  await page.locator("//input[contains(@id,'userName')]").fill('Rodrigo');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('name@example.com').fill('rod@gmail.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo uno');
  await page.getByPlaceholder('Current Address').press('Tab');
  await page.locator('#permanentAddress').fill('demo dos');
  await page.getByRole('button', { name: 'Submit' }).click({ timeout: 20000 });
  await expect(page).toHaveTitle(/DEMO/);
  await sleep(3000)

});