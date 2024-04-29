

// document.evaluate(xpathExpression, document, null, XPathResult.ANY_TYPE, null)
// $x("xpath")



const divContent = document.createElement('div');
divContent.classList = "flex items-center  justify-center p-4 border-2 border-gray-800 hover:border-gray-50 border-2 rounded-lg mx-auto max-w-sm cursor-pointer"

divContent.innerHTML = `
<i>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H5.01M5 1H10C10.512 1 11.024 1.195 11.414 1.586L18.414 8.586C18.7889 8.96106 18.9996 9.46967 18.9996 10C18.9996 10.5303 18.7889 11.0389 18.414 11.414L11.414 18.414C11.0389 18.7889 10.5303 18.9996 10 18.9996C9.46967 18.9996 8.96106 18.7889 8.586 18.414L1.586 11.414C1.4 11.2285 1.25249 11.0081 1.15192 10.7655C1.05136 10.5228 0.99973 10.2627 1 10V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</i>
`


function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

divContent.onclick = () => {
    let xPathCodeBoxShopify = '//input[@name="reductions"]'
    console.log(getElementByXpath(xPathCodeBoxShopify))
    
}

export default divContent