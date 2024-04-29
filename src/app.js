import checkCode from "./checkCode"


const content = document.createElement("div")
content.classList = "bg-red-500 fixed inset-x-0 bottom-5 items-center flex justify-center text-white bg-white p-4 border-white border-2 rounded-lg mx-auto max-w-sm"


content.appendChild(checkCode)




// RENDER
document.body.appendChild(content)

// ADD TAILWIND
const tailwind = document.createElement("script")
tailwind.src = "https://cdn.tailwindcss.com"
document.head.appendChild(tailwind)

console.log(content)


