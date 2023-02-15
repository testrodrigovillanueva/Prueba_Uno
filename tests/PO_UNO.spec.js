// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones');


test('test', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
  await f.texto("//input[contains(@id,'wsf-1-field-29')]","rodrigo",2000)
  await f.scroll(0,600)  
  await f.tiempo(2000)

});