// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones_curso');

const archivo="C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_JAVASCRIPT/Curso/tests/archivos/CURSOS.txt"

const tp=2500


test('Combox Unitarios', async ({ page }) => {
  page.setDefaultTimeout(8000);
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

test('Combox Multiples', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/select-menu")
  //await page.locator('div').filter({ hasText: 'Select...' }).nth(2).click();
  await f.click("//div[@class=' css-1hwfws3'][contains(.,'Select...')]",tp)
  await page.locator('#react-select-4-option-0').click();
  await f.tiempo(tp)
  await page.locator('#react-select-4-option-1').click();
  await f.tiempo(tp)
  await page.locator('#react-select-4-option-2').click();

});


test('Combox Multiples Dos', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/select-menu")
  await f.click("//option[@value='saab'][contains(.,'Saab')]",tp)
  await f.combo_multiples("#cars",['volvo','audi','saab','opel'],tp)
  
});



test('Opciones Over', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://playwright.dev/docs/codegen-intro")
  await f.mouse_over("//a[@href='#'][contains(.,'Node.js')]",tp)
  await f.tiempo(3000)
  await f.click("//a[@href='/python/docs/codegen-intro'][contains(.,'Python')]",tp)
});

test('Opciones Click', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/buttons")  
  // await f.click_dinamico("Click Me",tp)
  // await f.click_derecho_dinamico("Right Click Me",tp)
  // await f.dobleClick_dinamico("Double Click Me",tp) 
  //await f.click("#JhpQ8",tp)
  //await f.click('button:text("Click Me")',tp)
  await f.click_dinamico("Click Me",tp)
  await f.click_derecho_dinamico("Right Click Me",tp)
  await f.dobleClick_dinamico("Double Click Me",tp)

});

test('Drag and Drop', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/droppable")
  await f.drag_drop("//div[contains(@id,'draggable')]","(//div[@class='drop-box ui-droppable'][contains(.,'Drop here')])[1]",tp)
  await f.tiempo(2000)

});

test('Copiar y Pegar Input', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/datos-personales/")
  await f.scroll(0,500)
  await f.texto("//input[contains(@id,'wsf-1-field-21')]","rodrigo",tp)
  await f.copiar_input("//input[contains(@id,'wsf-1-field-21')]",tp)
  await f.pegar_input("//input[contains(@id,'wsf-1-field-22')]")
  await f.tiempo(2000)

});


test('Copiar Texto', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/datos-personales/")
  await f.copiar_texto("//h2[contains(.,'Datos Personales Básicos')]","//input[contains(@id,'wsf-1-field-22')]",tp)
  await f.tiempo(2000)

});

test('Upload files', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/upload-files/")
  await f.scroll(0,1000)
  await f.tiempo(tp)
  await f.Upload_file("//input[contains(@id,'wsf-1-field-94')]",archivo,tp)
  await f.Mover_Upload_file("//input[contains(@id,'wsf-1-field-94')]",tp)
  await f.Upload_file("//input[contains(@id,'wsf-1-field-94')]",archivo,tp)

});

test('Calendarios', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://testingqarvn.com.es/upload-files/")
  await f.scroll(0,1000)
  await f.tiempo(tp)
  // await f.click("//input[contains(@id,'wsf-1-field-91')]",tp)
  // await f.click("(//div[contains(.,'17')])[9]",tp)
  //Por texto
  await f.texto("//input[contains(@id,'wsf-1-field-91')]","Febrero 18, 2023",tp)
  await f.Tab("//input[contains(@id,'wsf-1-field-91')]",tp)
  await f.click("(//div[contains(.,'19')])[118]",tp)
  await f.Tab("(//div[contains(.,'19')])[118]",tp)

});


test.only('Calendarios_Paralelo', async ({ page }) => {
    page.setDefaultTimeout(8000);
    const f = new FJ(page);
   
      await f.openURL("https://testingqarvn.com.es/upload-files/")
      await f.scroll(0,1000)
      await f.tiempo(tp)
      // await f.click("//input[contains(@id,'wsf-1-field-91')]",tp)
      // await f.click("(//div[contains(.,'17')])[9]",tp)
      //Por texto
      await f.texto("//input[contains(@id,'wsf-1-field-91')]","Febrero 18, 2023",tp)
      await f.Tab("//input[contains(@id,'wsf-1-field-91')]",tp)
      await f.click("(//div[contains(.,'19')])[118]",tp)
      await f.Tab("(//div[contains(.,'19')])[118]",tp)
    
  
  });

