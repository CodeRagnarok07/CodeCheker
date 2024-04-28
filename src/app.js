

console.log("content inject");

const body = document.getElementsByTagName("body")[0]
const content =document.createElement("div")
content.classList ="bg-red-500"

content.innerText = "Hello World"

