import puppeteer, { Locator } from 'puppeteer-core';
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';




let browser;
let page;

beforeEach(async () => {
  const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  browser = await puppeteer.launch({
    executablePath,
    headless: false, // real browser
    slowMo: 200,
    devtools: false
  });
  page = await browser.newPage()
});

test('The first rule', async () => {
  const screenWidth = 1024;
  await page.setViewport({ width: screenWidth, height: 900 });
  await page.goto('http://192.168.1.2:8080/');
  await page.waitForTimeout(3000);
});

afterEach(async () => {
  await browser.close();
})
