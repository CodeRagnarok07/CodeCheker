import type { PlasmoCSConfig } from "plasmo"


import { Storage } from "@plasmohq/storage"


import  "./input_paste"


export const config: PlasmoCSConfig = {
  matches: ["https://simplycodes.com/editor/verify", "http://localhost:5173/"],
}

// const storage = new Storage({
//   area: "local"
// })
// const data = await storage.getAll()
// console.log(data)

window.addEventListener("load", async() => {

  const listInputFile: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type='file']")


  for (let index = 0; index < listInputFile.length; index++) {
      const input = listInputFile[index];
      const fileInputContent = document.createElement("div")
      fileInputContent.className = "clipboard_parent_div"


      const inputText = document.createElement("input")
      inputText.type = "text"
      inputText.style.cssText = `
          padding: 5px;
          border-radius: 5px;

          `
      inputText.placeholder = "+ paste file"


      const imgPreview = document.createElement("img")
      imgPreview.style.cssText = `
      height: 30vh;
      width: auto;
      position: fixed;
      right: 15%;
      top: 10%;
      object-fit: contain;
      pointer-events: none;
      `

      inputText.addEventListener('paste', e => {
          imgPreview.src = null
          if (e.clipboardData) {
              input.files = e.clipboardData.files;
              input.dispatchEvent(new Event('change', { bubbles: true }));

              if (input.files) {
                  const [file] = input.files
                  imgPreview.src = URL.createObjectURL(file)
              }
          }
          window.scrollTo(0, document.body.scrollHeight);

      });

      inputText.addEventListener('click', e => {

          navigator.clipboard.read().then(async data => {
              const clipboardContent = data[0];
              const blob = await clipboardContent.getType('image/png');
              const file = new File([blob], 'image.png');
              const fileList = new FileList();
              fileList[0] = file;
              input.files = fileList
              input.dispatchEvent(new Event('change'));
  
          });
      })


      if (input.parentNode) {
          input.parentNode.appendChild(fileInputContent)
          fileInputContent.appendChild(imgPreview)
          fileInputContent.appendChild(inputText)
          fileInputContent.appendChild(input)
      }
  }
})
