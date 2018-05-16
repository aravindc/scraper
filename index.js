const puppeteer = require('puppeteer');

async function run(){
  //const browser = await puppeteer.launch({headless: false});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto('https://groceries.asda.com/special-offers/top-offers');
  await page.waitFor(2*1000);

  await page.screenshot({path: 'screenshot/page1.png'});
  browser.close();
}

run();
