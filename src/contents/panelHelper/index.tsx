import cssText from "data-text:~/contents/styles.css"
// import PanelHelper from "./PanelHelper"
import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import type { PlasmoCSConfig } from "plasmo"
import { sendToBackground } from "@plasmohq/messaging"
import getScreenShot from "~src/utils/takeScreen"


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
  const pageOffline = async () => {
    // getScreenShot()
    await sendToBackground({
      name: "test",
      body: {
        valid: null
      }
    })
  }

  return (
    <div aria-label="panel-helper-extension" className="fixed mx-auto w-full left-[0%] bottom-[0%] pointer-events-none   flex items-center justify-center">


      <div className="flex flex-col pointer-events-auto gap-2">

        {/* <div onClick={() => getScreenShot()} className="cursor-pointer rounded-md text-center px-4 bg-slate-300 border-4 text-black border-slate-900 bg-opacity-85">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" /></svg>
        </div> */}

        <div className="flex text-center gap-2">
          <div onClick={handleClickValid} className="cursor-pointer rounded-md px-4  bg-green-300 border-4 text-black border-green-900 bg-opacity-85">
            correcto
          </div>
          <div onClick={handleClickInvalid} className="cursor-pointer rounded-md px-4  bg-red-300 border-4 text-black border-red-900 bg-opacity-85">
            incorrecto
          </div>

        </div>

        <div onClick={pageOffline} className="cursor-pointer rounded-md text-center px-4 bg-slate-300 border-4 text-black border-slate-900 bg-opacity-85">
          page Offline
        </div>
      </div>
    </div>)
}

export default PlasmoOverlay