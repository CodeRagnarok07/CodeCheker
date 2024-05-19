import React, { useRef } from "react"

export default function InputTextPasteFile() {

    const inputTextRef = useRef(null)
    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    const HandlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    
        if (e.clipboardData) {
            const files = e.clipboardData.files
            input.files = files;
        }
        input.dispatchEvent(new Event('change', { bubbles: true }));
        console.log(input.files)
    }
    
    const seeFiles = () => {
        const ev = new Event('change', { bubbles: true })
        input.dispatchEvent(ev);
    }

    return (
        <div>
            <button onClick={seeFiles}>ver</button>
            <input ref={inputTextRef} onPaste={HandlePaste} type="text" />
        </div>
    )
}