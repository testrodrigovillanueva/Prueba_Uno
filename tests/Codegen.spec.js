// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('rodrigo');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('rod@gmail.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo de la dirección uno Demo de la dirección dos');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Demo direcci');
});