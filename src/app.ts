import puppeteer from 'puppeteer';



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



(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 400
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto("https://cynthiarowley.com/en-ve/collections/tops/products/butterfly-applique-top-1?variant=42430828675252");

    const btnAddCart = await page.waitForSelector(
        'text/add to cart'
    );
    console.log(btnAddCart)


    await browser.close();
})();
