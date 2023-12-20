import puppeteer, { Locator } from 'puppeteer-core';
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';

// interface Indicator {
//   i: string
// }
const set = new Set();
// const ind = uuidv4();
// const indVersion = uuidVersion(ind);
function index() {
  const ind = uuidv4();
  // set.add(i)
  set.has(ind) ? index() : set.add(ind);
  return ind
}

const responce = describe.each([
  [index(), '01012023', '12'],
  [index(), '12112023', '1'],
  [index(), '12112023', '1'],
  [index(), '12112023', '3'],
  [index(), '01012023', '8']
])

responce('For test ind: %s', (a, d, l) => {
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
  await page.goto('http://192.168.1.2:8080/');
  await page.setViewport({ width: screenWidth, height: 900 });
  await page.type('input[name="date"]', d, { delay: 50 });
  await page.type('input[name="distanc"]', l, { dely: 50 });

  const buttonOk = await page.$(".blockOk .ok");
  await buttonOk.click();
}, 19000);

afterEach(async () => {
  await browser.close();
})
});
