import cssText from "data-text:~/contents/styles.css"
// import PanelHelper from "./PanelHelper"
import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import type { PlasmoCSConfig } from "plasmo"
import { sendToBackground } from "@plasmohq/messaging"


export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,

}


export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}



const PlasmoOverlay = () => {
  const [codeValid, setCodeValid] = useStorage({
    key: "valid",
    instance: new Storage({
      area: "local"
    })
  })

  const handleClickValid = async () => {
    setCodeValid(true)
    // await getScreenShot()
    sendToBackground({
      name: "to_verify_page",
      body: {
        valid: true
      }
    })
  }
  const handleClickInvalid = async () => {
    setCodeValid(false)
    // await getScreenShot()
    sendToBackground({
      name: "to_verify_page",
      body: {
        valid: false
      }
    })
  }
  return (
    <div aria-label="panel-helper-extension" className="fixed mx-auto w-full left-[0%] bottom-[0%] pointer-events-none   flex items-center justify-center">
      <div className="flex flex-col pointer-events-auto gap-2">

        <div className="flex text-center gap-2">

          <div onClick={handleClickValid} className="cursor-pointer rounded-md px-4  bg-green-300 border-4 text-black border-green-900 bg-opacity-85">
            correcto
          </div>
          <div onClick={handleClickInvalid} className="cursor-pointer rounded-md px-4  bg-red-300 border-4 text-black border-red-900 bg-opacity-85">
            incorrecto
          </div>

        </div>

        <div className="cursor-pointer rounded-md text-center px-4 bg-slate-300 border-4 text-black border-slate-900 bg-opacity-85">
          captura
        </div>
      </div>
    </div>)
}

export default PlasmoOverlay