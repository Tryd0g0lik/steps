import puppeteer, { Locator } from 'puppeteer-core';
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';
// const globalDatabase = makeGlobalDatabase();
const set = new Set();

function index() {
  const ind = uuidv4();
  set.has(ind) ? index() : set.add(ind);
  return ind
}

const responce = describe.each([
  [index(), '01012023', '1']
  // [index(), '12112023', '2'],
  // [index(), '12112023', '3'],
])

responce('For test ind: %s', (a, d, l) => {
  let browser;
  let page;


  beforeAll(async () => {
  const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  browser = await puppeteer.launch({
    executablePath,
    headless: false, // real browser
    slowMo: 200,
    devtools: true

  });
    page = await browser.newPage();

  });

  test('The first rule', async () => {
    const screenWidth = 1024;

    await page.goto('http://192.168.1.2:8080/');


    await page.setViewport({ width: screenWidth, height: 900 });
    // page.reload()
  await page.type('input[name="date"]', d, { delay: 50 });
  await page.type('input[name="distanc"]', l, { dely: 50 });

  const buttonOk = await page.$(".blockOk .ok");
    await buttonOk.click();

    await page.waitForTimeout(5000);

  }, 19000);
  afterAll(async () => {
    await browser.close();
    await browser.close();

  });

});
