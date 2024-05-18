import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import CountButton from "~components/BtnCheck"

export const config: PlasmoCSConfig = {
  matches: ["https://**/*", "*://**/*"],
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return <CountButton />
}

export default PlasmoOverlay