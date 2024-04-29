const script =document.createElement("script")
script.type = "module"
fetch("http://localhost:5173/src/app.js").then((res)=>res.text()).then((res)=>script.innerHTML = res)
// script.src = "http://localhost:5173/src/app.js"
body.appendChild(script)