// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones_curso');
import dotenv from 'dotenv'
import puppeteer from 'puppeteer';
//https://www.npmjs.com/package/allure-playwright
//https://www.npmjs.com/package/dotenv
//npm run test
//npm install xlsx
//https://www.npmjs.com/package/node-xlsx

const archivo="C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_JAVASCRIPT/Curso/tests/archivos/CURSOS.txt"

const tp=500
const datos = ['Juan', 'Perez','juan@gmail.com','555555','Dirección demo','java'];
//Mando a Llamar al archivo .env
dotenv.config()

test('Assert Uno', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
  //await f.scroll(0,500)  
  await f.texto_val("//input[contains(@id,'wsf-1-field-29')]",`${datos[0]}`,tp) 
  await f.texto_val("//input[contains(@id,'wsf-1-field-30')]",`${datos[1]}`,tp)

  //Validar titulo de la pagina
  await expect(page).toHaveTitle(/.*Prueba de campos/);
  //Validar Url
  await expect(page).toHaveURL(/.*check/);
  //Pagina carga 200
  const response = await page.request.get('https://testingqarvn.com.es/prueba-de-campos-checkbox/');
  await expect(response).toBeOK();
  
});

test.only('Assert dos', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/combobox/")
  //await f.scroll(0,500) 
  //Esperas Implicitas
  await page.waitForSelector("//input[contains(@id,'wsf-1-field-45')]", {timeout: 5000})
  await f.texto_val("//input[contains(@id,'wsf-1-field-45')]",`${datos[0]}`,tp)
  
 
  await f.texto_val("//input[contains(@id,'wsf-1-field-46')]",`${datos[1]}`,tp)   

  //Validar titulo de la pagina
  await expect(page).toHaveTitle(/.*ComboBox/);
  //Validar no es el titulo de la pagina de la pagina
  await expect(page).not.toHaveTitle(/.*ComboBoxx/);
  //Validar Url
  await expect(page).toHaveURL("https://testingqarvn.com.es/combobox/");
  //Pagina carga 200
  const response = await page.request.get('https://testingqarvn.com.es/combobox/');
  await expect(response).toBeOK();
  //Validar combos
  await f.scroll(0,600,2000)
  const com=await page.locator("//select[contains(@id,'wsf-1-field-53')]")
  com.selectOption("Linux")
  await expect(com).toHaveValue("Linux")
  //Validar Texto Ligero
  // const texto2=await page.locator("//h2[contains(.,'Datos Personales Básicos ComboxBox')]")
  // await expect.soft(texto2).toHaveText("Fallo",{timeout: 3000})
  //Validar Texto
  const texto=await page.locator("//h2[contains(.,'Datos Personales Básicos ComboxBox')]")
  await expect(texto).toHaveText("Datos Personales Básicos ComboxBox")

  


 
  
});
