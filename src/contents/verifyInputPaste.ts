import type { PlasmoCSConfig } from "plasmo"
import  "../utils/input_paste"
import { sendToBackground } from "@plasmohq/messaging"

export const config: PlasmoCSConfig = {
  matches: ["https://simplycodes.com/editor/verify"],
}

