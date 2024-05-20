import cssText from "data-text:~/contents/styles.css"
import PanelHelper from "./PanelHelper"

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
  return <PanelHelper/>
}

export default PlasmoOverlay