const db = require('../../src/persistence');
const puppeteer = require('puppeteer');


describe('delete item from UI', () => {
    test('it can remove an existing item', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage()
        await page.goto('http://localhost:3000/');
        await expect(page.title()).resolves.toMatch('Todo App');

        const deleteButton = '#root > div > div > div > div > div > div.text-center.remove.col-1 > button'
        await page.waitForSelector(deleteButton);
        await page.focus(deleteButton)        
      //  await page.keyboard.type('Test Item from Puppeteer')
      //  await page.keyboard.type(String.fromCharCode(13));
        await page.click(deleteButton)


        await db.init();
        const items = await db.getItems();
        expect(items.length).toBe(0);
        
        await browser.close();
  });
});