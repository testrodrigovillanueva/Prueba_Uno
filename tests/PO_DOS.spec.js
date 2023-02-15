// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones_curso')
const tp=300

var myArray = ['rodrigo.com', 'rodrigo@gmail.com', 'rod.mx','krt.com']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)

test('Demo POM', async ({page}) =>{
    const f=new FJ(page);
    await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/",3000)
    await f.validar_titulo("Prueba de campos Checkbox | TestingQaRvn");
    await f.validar_url_lig("https://testingqarvn.com.es/prueba-de-campos-checkbox/") 
    await f.scroll(0,500)
    //Campo que no se encuentra
    //await f.texto_try("//input[contains(@id,'wsf-1-field-28')]","Rodrigo")
    //Campo que no se encuentra
    await f.texto_val("//input[contains(@id,'wsf-1-field-29')]","Rodrigo")
    const valor=await f.valor_campo("//input[contains(@id,'wsf-1-field-29')]")
    console.log(valor)
    if(valor=="Rodrigo")
    {
        await f.texto_try("//input[contains(@id,'wsf-1-field-30')]","Villanueva",tp)
    }else if(valor=="Erika"){
        await f.texto_try("//input[contains(@id,'wsf-1-field-30')]","Paz",tp)
    }else if(valor=="Juan"){
        await f.texto_try("//input[contains(@id,'wsf-1-field-30')]","Perez",tp)
    }else{
        await f.texto_try("//input[contains(@id,'wsf-1-field-30')]","Chavez",tp)
    }
    
    await f.texto_try("//input[contains(@id,'wsf-1-field-31')]",rand,tp)
    await f.texto("//input[contains(@id,'wsf-1-field-32')]","78678678")
    await f.texto("//textarea[contains(@id,'wsf-1-field-33')]","Dir uno")
    await f.click("//label[contains(@id,'wsf-1-label-36-row-1')]")
    await f.click("//label[contains(@id,'wsf-1-label-36-row-3')]");
    await f.click("//label[contains(@id,'wsf-1-label-36-row-1')]")
    await f.click("//button[contains(@id,'wsf-1-field-34')]")
    await f.validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias")
    // await f.validar_url("https://testingqarvn.com.es/prueba-de-campos-checkbox2/") 
    await f.tiempo(1000)
    
   
});