// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./Funciones_curso')
const tp=300

var myArray = ['rodrigo', 'rodrigo@gmail.com', 'SuperSecretPassword!','krt.com']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)

test.beforeEach(async ({ page }) => {
    const f=new FJ(page);
    await f.openURL("https://the-internet.herokuapp.com/login",tp)
    await f.validar_titulo("The Internet");
    await f.validar_url_lig("https://the-internet.herokuapp.com/login") 
    await f.scroll(0,200)
    const valor=await f.valor_texto("//div[@id='flash']")

    if(valor[0] !="You logged into a secure area!")
    {   
        await f.texto("//input[contains(@id,'username')]","tomsmith",tp)
        await f.texto("//input[contains(@id,'password')]",rand,tp)
        await f.click("//i[contains(.,'Login')]",tp)
   
    }

});

test('Demo POM', async ({page}) =>{
    const f=new FJ(page);
    // await f.openURL("https://the-internet.herokuapp.com/login",tp)
    // await f.validar_titulo("The Internet");
    // await f.validar_url_lig("https://the-internet.herokuapp.com/login") 
    // await f.scroll(0,200)

    // await f.texto("//input[contains(@id,'username')]","tomsmith",tp)
    // await f.texto("//input[contains(@id,'password')]",rand,tp)
    // await f.click("//i[contains(.,'Login')]",tp)
   

   
    console.log(valor[0])
    while (valor[0] != "You logged into a secure area!"){
        //await page.reload();
        rand = myArray[(Math.random() * myArray.length) | 0]
        console.log(rand)
        if(valor[0] !="You logged into a secure area!")
        {   
            await f.texto("//input[contains(@id,'username')]","tomsmith",tp)
            await f.texto("//input[contains(@id,'password')]",rand,tp)
            await f.click("//i[contains(.,'Login')]",tp)
       
        }
        else{           
            console.log("Termina el ciclo")
            break;
        }
       
        //break;
        // if(valor[0]=="You logged into a secure area!"){
        //     console.log("Valor if: " + valor[0])
        //     await f.terminar(tp)   
        //     break;                    
        // }
        
    }
    
    
    await f.tiempo(1000)
    
   
});