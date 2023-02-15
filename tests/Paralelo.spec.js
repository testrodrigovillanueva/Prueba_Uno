// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones_curso');

const archivo="C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_JAVASCRIPT/Curso/tests/archivos/CURSOS.txt"

const tp=500
var x=0;
//test.describe.configure({ mode: 'parallel' })


for(x=1;x<=50;x++){
  test(`Combo numero ${x}` , async ({ page }) => {
    //page.setDefaultTimeout(8000);   
    const f = new FJ(page);
    await f.openURL("https://testingqarvn.com.es/combobox/")
    await f.texto_val("//input[contains(@id,'wsf-1-field-45')]","rodrigo")
    await f.texto_val("//input[contains(@id,'wsf-1-field-46')]","villanueva")
    await f.scroll(0,700)
    await f.texto_val("//input[contains(@id,'wsf-1-field-47')]","rod@gmail.com")
    await f.texto_val("//input[contains(@id,'wsf-1-field-48')]","6567576")
    await f.texto_val("//textarea[contains(@id,'wsf-1-field-49')]","Dirección uno",tp)
    await f.click("//label[contains(@id,'wsf-1-label-50-row-1')]",tp)
    await f.click("//label[contains(@id,'wsf-1-label-51-row-1')]",tp)
    await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Linux",tp)
    await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Windows",tp)
    await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Mac",tp)
    await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Linux",tp)
  });
}
