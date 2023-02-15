const { test, expect } = require('@playwright/test');

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
const tie=200

exports.FJ=class FJ{

    constructor(page){
        this.page=page;
    }

    async open(){
        await this.page.goto('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
    }

    async openURL(url,tiempo=tie){
        await this.page.goto(url)
        await sleep(tiempo)
    }

    async tiempo(t){
        await sleep(t)
    }

    async scroll(x,y,tiempo=tie){
        await this.page.mouse.wheel(x,y)
        await sleep(tiempo)
    }

    async texto(selector,val,tiempo=tie){
        await this.page.locator(selector).fill(val)
        await sleep(tiempo)
    }

    async click(selector,tiempo=tie){
        await this.page.locator(selector).click()
        await sleep(tiempo)
    }

    async validar_texto(selector,val,tiempo=tie){
        const locator = this.page.locator(selector);
        await expect(locator).toContainText(val);
        await sleep(tiempo)
    }

    async texto_val(selector,val,tiempo=tie){
        const locator = this.page.locator(selector);
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
        await expect(locator).toBeEmpty();
        await this.page.locator(selector).fill(val)
        await sleep(tiempo)
    }

    async texto_try(selector,val,tiempo=tie){
        try{
            const locator = this.page.locator(selector);
            await expect(locator).toBeVisible();
            await expect(locator).toBeEnabled();
            await expect(locator).toBeEmpty();
            await this.page.locator(selector).fill(val)
            await sleep(tiempo)
        }catch(error){
            console.log("Campo con algun Error")
        }
        
    }

    async validar_url(url,tiempo=tie){
        await expect(this.page).toHaveURL(url);
        await sleep(tiempo)
    }

    async validar_url_lig(url,tiempo=tie){
        await expect.soft(this.page).toHaveURL(url);
        await sleep(tiempo)
    }

    async validar_titulo(titulo,tiempo=tie){
        await expect(this.page).toHaveTitle(titulo);
        await sleep(tiempo)
    }

    async valor_campo(selector,tiempo=tie){
        const value = await this.page.locator(selector).inputValue();
        await sleep(tiempo)
        return value
    }
    
    async valor_texto(selector,tiempo=tie){
        //const value = await this.page.locator(selector).textContent();
        const value = await this.page.locator(selector).allInnerTexts()
        await sleep(tiempo)
        return value
    }

    async terminar(tiempo=tie){
        await this.page.close()
        // await this.page.clear()
        await sleep(tiempo)
    }

    async combo_value(selector,val,tiempo=tie){
        const cam = await this.page.locator(selector)
        await cam.selectOption(val)
        await sleep(tiempo)
    }

    async combo_Label(selector,val,tiempo=tie){
        const cam = await this.page.locator(selector)
        await cam.selectOption({ label: val });
        await sleep(tiempo)
    }

    async combo_multiples(selector,arg=defaultValue,tiempo=tie){
        const cam = await this.page.locator(selector)
        //const val=new Array();
        console.log(arg)       
        await cam.selectOption(arg); 
        await sleep(tiempo)
    }

    //Actions Click Especial
    async click_dinamico(texto,tiempo=tie){
        const sel = await this.page.getByRole('button', { name: texto, exact: true })
        await sel.click()
        await sleep(tiempo)
    }

    async dobleClick_dinamico(texto,tiempo=tie){
        const sel = await this.page.getByRole('button', { name: texto, exact: true })
        await sel.dblclick();
        await sleep(tiempo)
    }

    async click_derecho_dinamico(texto,tiempo=tie){
        const sel = await this.page.getByRole('button', { name: texto, exact: true })
        await sel.click({ button: 'right' });
        await sleep(tiempo)
    }

    async dobleClick(selector,val,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.dbllclick();
        await sleep(tiempo)
    }

    async click_derecho(selector,val,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.click({ button: 'right' });
        await sleep(tiempo)
    }

    async mouse_over(selector,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.hover();
        await sleep(tiempo)
    }

    async drag_drop(ori,des,tiempo=tie){         
        await this.page.locator(ori).dragTo(this.page.locator(des));
        await sleep(tiempo)
    }

    async copiar_input(selector,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.press("Control+A")
        await sel.press("Control+C")
        await sleep(tiempo)
    }

    async pegar_input(selector,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.press("Control+V")
        await sleep(tiempo)
    }

    async copiar_texto(selector,pegar,tiempo=tie){
        const value = await this.page.locator(selector).allInnerTexts()
        console.log(value)
        //await sleep(8000)
        const val2 = await this.page.locator(pegar)
        await val2.fill(value[0])
        await sleep(tiempo)
    }

    async Upload_file(selector,archivo,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.setInputFiles(archivo);
        await sleep(tiempo)
    }

    async Mover_Upload_file(selector,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.setInputFiles([]);
        await sleep(tiempo)
    }

    async Tab(selector,tiempo=tie){
        const sel = await this.page.locator(selector)
        await sel.press("Tab")
        await sleep(tiempo)
    }






    



}