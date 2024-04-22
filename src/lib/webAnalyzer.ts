
const hackerShopify = async (url: string) => {

    const req = await fetch(url + "products.json")

}


export default async function (url: string) {
    if (!url.endsWith("/")) {
        url = url + "/"
    }
    const req = await fetch(url)


    if (req.headers.get("link") == '<https://cdn.shopify.com>; rel="preconnect", <https://cdn.shopify.com>; rel="preconnect"; crossorigin') {
        const token = req.headers.get("X-Shopify-Access-Token")
        // console.log(req.headers)
        hackerShopify(url)
    }


    // for (let index = 0; index < frameworkExtension.length; index++) {
    //     const req = await fetch(url + frameworkExtension[index])
    //     if(req.status == 200){
    //         console.log(req)
    //     }
    // }

}