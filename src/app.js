import checkCode from "./checkCode"


const content = document.createElement("div")
content.classList = "fixed inset-x-0 bottom-5"

const framework = `<div class="w-full bg-gray-700 rounded-xl border-3 border-white bg-opacity-50 px-4 py-1 border-white border-2 rounded-lg text-lg">
    Shopify
</div>`

const code = `<div class="w-full bg-gray-700 rounded-xl border-3 border-white bg-opacity-50 text-center px-4 py-1 border-white border-2 rounded-lg text-lg">
    code
</div>`



content.innerHTML = `<div class="flex-col items-center flex justify-center text-white mx-auto max-w-sm gap-2">
    <div class="w-full bg-gray-700 rounded-xl border-3 border-white bg-opacity-50 flex justify-center  px-4 py-2 border-white border-2 rounded-lg">
    ${checkCode.outerHTML}
    </div>
</div>`





// RENDER
document.body.appendChild(content)

// ADD TAILWIND
const tailwind = document.createElement("script")
tailwind.src = "https://cdn.tailwindcss.com"
document.head.appendChild(tailwind)

console.log(content)


