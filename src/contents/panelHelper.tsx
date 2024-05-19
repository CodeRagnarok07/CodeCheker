import cssText from "data-text:~/contents/styles.css"
import PanelHelper from "../components/PanelHelper"

import type { PlasmoCSConfig } from "plasmo"


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