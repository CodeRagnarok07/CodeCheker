import type { PlasmoMessaging } from "@plasmohq/messaging"
import {handleOffline} from "../../utils/handleVerify"
const handleSelect = (query: string, option: number) => {
  let select = document.querySelector(query) as HTMLSelectElement
  select.getElementsByTagName('option')[option].selected = true
  select.dispatchEvent(new Event('change'))
}

const simpleClick = (query: string) => {
  (document.querySelector(query) as HTMLDivElement)?.click();
}



const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

  let [tab] = await chrome.tabs.query({ url: ["https://simplycodes.com/editor/*"] });

  if (tab) {
    await chrome.tabs.update(tab.id, {
      active: true
    });

    chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      // files: ["~src/utils/test_script.ts"],
      func: handleOffline
    });
  }
  // import { simpleClick } from "~src/utils/DOMmanage";



  res.send({
    "tab data": `JSON.stringify(${tab})`
  })
}

export default handler