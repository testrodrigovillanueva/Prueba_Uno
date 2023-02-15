// @ts-check
import { test, expect } from '@playwright/test';


const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let tiempo=500



test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('rodrigo');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').type('rod@gmail.com');
  await sleep(tiempo)
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo de la dirección uno Demo de la dirección dos');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Demo dirección dos');
  await sleep(4000)
  //await page.getByRole('button', { name: 'Submit' }).click({ timeout: 20000 });
  await page.getByRole('button', { name: 'Submit' }).press("Enter");
  await expect(page).toHaveTitle(/DEMO/);
  await sleep(tiempo)
});

test.only('test2', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('rodrigo');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').type('rodrigo@gmail.com');
  await sleep(4000)
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo de la dirección uno Demo de la dirección dos');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Demo dirección dos');
  //await page.getByRole('button', { name: 'Submit' }).click({ timeout: 20000 });
  await page.getByRole('button', { name: 'Submit' }).press("Enter");
  await expect(page).toHaveTitle(/DEMO/);
  await sleep(4000)
});