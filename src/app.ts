import puppeteer from 'puppeteer';
import fs from 'node:fs/promises'


const webs: string[] = [
    "https://lexmod.com",
    "https://www.boozt.com/eu/en/shopcart",
    "https://www.yoursurprise.fr/"
];

const addProduct = [
    "add to cart",
    "add"
];

const discount = [
    "promo code",
    "Add discount code",
    "Discount code"
];
const curretn = "https://cynthiarowley.com/en-ve/collections/tops/products/butterfly-applique-top-1?variant=42430828675252";

const getPageToLocal = async (web: string) => {
    const req = await fetch(web)
    const body = await req.text()
    fs.writeFile('./test.html', body, { encoding: 'utf8' },)
};

const webScraping = async () => {
    const FileData = await fs.readFile('./test.html', { encoding: 'utf8' }, )

    const regex = /<([^>]+?)>.*?\${Bulgaria (BGN лв.)}.*?<\/\1>/g;
    console.log(FileData.match(regex))

}

// write a regext that get any node element with a text ${text} inside

(async () => {
    // Launch the browser and open a new blank page
    // const browser = await puppeteer.launch({
    //     headless: false,
    //     slowMo: 400
    // });
    // const page = await browser.newPage();
    // Navigate the page to a URL
    // await page.goto();
    await webScraping()

    // await browser.close();
})();
