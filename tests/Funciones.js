const { test, expect } = require('@playwright/test');

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};  

exports.FJ = class FJ {
    constructor(page) {
        this.page = page;          
    } 

    async open() {
        await this.page.goto('https://demoqa.com/text-box'); 
    }

    async openURL(url) {
        await this.page.goto(url); 
    }

    async tiempo(t){
        await sleep(t)
    }

    async scroll(x,y,tiempo=300){
        await this.page.mouse.wheel(x, y);
        await sleep(tiempo)
    }

    async texto(selector,valor,tiempo=300){
        await this.page.locator(selector).fill(valor)
        await sleep(tiempo)
    }

    async validar_texto(selector,val,tiempo=tie){
        const locator = this.page.locator(selector);
        await expect(locator).toContainText(val);
        await sleep(tiempo)
    }
    


}