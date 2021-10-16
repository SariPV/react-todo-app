const db = require('../../src/persistence');
const puppeteer = require('puppeteer');


describe('check item from UI', () => {
    test('it can update an existing item', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage()
        await page.goto('http://localhost:3000/');
        await expect(page.title()).resolves.toMatch('Todo App');

        const checkButton = '#root > div > div > div > div > div > div:nth-child(1) > button'
        await page.waitForSelector(checkButton);
        await page.focus(checkButton)        
      //  await page.keyboard.type('Test Item from Puppeteer')
      //  await page.keyboard.type(String.fromCharCode(13));
        await page.click(checkButton)


        
        
        await browser.close();
  });
});