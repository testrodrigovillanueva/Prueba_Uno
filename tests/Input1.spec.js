// @ts-check
import { test, expect } from '@playwright/test';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('rodrigo');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').type('rod@gmail.com');
  //await sleep(3000)
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo de la dirección uno Demo de la dirección dos');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Demo direcci');
  //await page.getByRole('button', { name: 'Submit' }).click({ timeout: 20000 });
  await page.getByRole('button', { name: 'Submit' }).press("Enter")
  await expect(page).toHaveTitle(/DEMO/);

  await sleep(5000)
});