// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones_curso');
import dotenv from 'dotenv'
//https://www.npmjs.com/package/dotenv
//npm run test
//npm install xlsx
//https://www.npmjs.com/package/node-xlsx

const archivo="C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_JAVASCRIPT/Curso/tests/archivos/CURSOS.txt"

const tp=500
const datos = ['Juan', 'Perez','juan@gmail.com','555555','Dirección demo','java'];
//Mando a Llamar al archivo .env
dotenv.config()

test('Parametros Uno', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
  //await f.scroll(0,500)  
  await f.texto_val("//input[contains(@id,'wsf-1-field-29')]",`${datos[0]}`,tp) 
  await f.texto_val("//input[contains(@id,'wsf-1-field-30')]",`${datos[1]}`,tp)
  await f.scroll(0,200)
  await f.texto_val("//input[contains(@id,'wsf-1-field-31')]",`${datos[2]}`,tp)
  await f.texto_val("//input[contains(@id,'wsf-1-field-32')]",`${datos[3]}`,tp)
  await f.texto_val("//textarea[contains(@id,'wsf-1-field-33')]",`${datos[4]}`,tp)
  
 
});

test('Parametros Dos', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
  await f.scroll(0,500)
  await f.texto_val("//input[contains(@id,'wsf-1-field-29')]",`${datos[0]}`,tp)
  await f.texto_val("//input[contains(@id,'wsf-1-field-30')]",`${datos[1]}`,tp)
  await f.scroll(0,700)
  await f.texto_val("//input[contains(@id,'wsf-1-field-31')]",`${datos[2]}`,tp)
  await f.texto_val("//input[contains(@id,'wsf-1-field-32')]",`${datos[3]}`,tp)
  await f.texto_val("//textarea[contains(@id,'wsf-1-field-33')]",`${datos[4]}`,tp)
  console.log(`${datos[5]}`)
  if(`${datos[5]}`.toUpperCase()=="PHP"){
    await f.click("//label[contains(@id,'wsf-1-label-36-row-1')]",tp)
  }
  else if(`${datos[5]}`.toUpperCase()=="PYTHON"){
    await f.click("//label[contains(@id,'wsf-1-label-36-row-2')]",tp)
  }
  else if(`${datos[5]}`.toUpperCase()=="JAVASCRIPT"){
    await f.click("//label[contains(@id,'wsf-1-label-36-row-3')]",tp)
  }
  else{
    console.log("Niguna opción es valida")
  }
});


//variables de Ambiente .env
test('Variables de Ambiente', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  //console.log(process.env)
  await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
  await f.scroll(0,500)
  await f.texto_val("//input[contains(@id,'wsf-1-field-29')]",process.env.NOMBRE,tp)
  await f.texto_val("//input[contains(@id,'wsf-1-field-30')]",process.env.APELLIDO,tp)
  await f.scroll(0,700)
  await f.texto_val("//input[contains(@id,'wsf-1-field-31')]",process.env.EMAIL,tp)
  await f.texto_val("//input[contains(@id,'wsf-1-field-32')]",process.env.TELEFONO,tp)
  await f.texto_val("//textarea[contains(@id,'wsf-1-field-33')]",process.env.DIRECCION,tp)
  
});




//Leer desde Excel
var XL=require("xlsx");
var libro=XL.readFile(("Data.xlsx"));
let datos_xl=libro.SheetNames;
//console.log(datos_xl)
const hoja=datos_xl[0]
const excel=XL.utils.sheet_to_json(libro.Sheets[hoja])
//console.log(excel)
// for(const fila of excel)
// {  
//   console.log(fila['nombre'])
//   console.log(fila['apellido'])
// }




test.only('Data Excel', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  //console.log(process.env)
  for(const fila of excel){  
    await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
    await f.texto_val("//input[contains(@id,'wsf-1-field-29')]",fila['nombre'],tp)
    await f.texto_val("//input[contains(@id,'wsf-1-field-30')]",fila['apellido'],tp)  
    await f.texto_val("//input[contains(@id,'wsf-1-field-31')]",fila['email'],tp)
    //await f.texto_val("//input[contains(@id,'wsf-1-field-32')]",(fila['tel']),tp)
    await f.texto_val("//input[contains(@id,'wsf-1-field-32')]",(fila['tel']).toString(),tp)
    await f.texto_val("//textarea[contains(@id,'wsf-1-field-33')]",fila['direccion'],tp)
    await f.click("//button[contains(@id,'wsf-1-field-34')]",tp)
  }
  
});


