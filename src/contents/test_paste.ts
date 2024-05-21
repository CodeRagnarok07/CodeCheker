import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"
import { simpleClick } from "~src/utils/DOMmanage";


export const config: PlasmoCSConfig = {
    matches: ["https://simplycodes.com/editor/verify"],
}

const storage = new Storage({
    area: "local"
})



window.addEventListener("load", () => {
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
        cursor: pointer;        
        `
        // fileInputContent.appendChild(imgPreview)



        inputText.addEventListener('paste', async e => {
            imgPreview.src = null
            if (e.clipboardData) {
                input.files = e.clipboardData.files;
                input.dispatchEvent(new Event('change', { bubbles: true }));

                if (input.files) {
                    const data: boolean = await storage.get("valid")
                    if (data == true) {
                        imgPreview.style.border = "3px solid green"
                        imgPreview.onclick = () => {
                            simpleClick("#corrections>span.gr8")
                            simpleClick("#submit-valid")
                        }
                    } else if (data == false) {
                        imgPreview.style.border = "3px solid red"
                        imgPreview.onclick = () => {
                            simpleClick("#submit-invalid")
                        }
                    }
                    const [file] = input.files
                    imgPreview.src = URL.createObjectURL(file)


                }
            }
            window.scrollTo(0, document.body.scrollHeight);

        });

        inputText.addEventListener('click', e => {
            e.currentTarget.dispatchEvent(new Event('paste'))
            console.log(e.currentTarget)

            navigator.clipboard.read().then(async data => {
                const clipboardContent = data[0];
                const blob = await clipboardContent.getType('image/png');
                const file = new File([blob], 'image.png');              
                input.files[0] = file
                input.dispatchEvent(new Event('paste'));
            });
            console.log(input.files)
        })

        if (input.parentNode) {
            input.parentNode.appendChild(fileInputContent)
            fileInputContent.appendChild(imgPreview)
            fileInputContent.appendChild(inputText)
            fileInputContent.appendChild(input)
        }

    }

})




