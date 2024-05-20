import type { PlasmoMessaging } from "@plasmohq/messaging"
import { simpleClick, handleSelect } from "~src/utils/DOMmanage";




const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

  const { valid } = req.body
  let [tab] = await chrome.tabs.query({ url: ["https://simplycodes.com/editor/verify", "http://localhost:5173/"] });



  const validator = () => {
    const handleSelect = (query: string, option: number) => {
      let select = document.querySelector(query) as HTMLSelectElement
      select.getElementsByTagName('option')[option].selected = true
      select.dispatchEvent(new Event('change'))
    }

    const simpleClick = (query: string) => {
      (document.querySelector(query) as HTMLDivElement)?.click();
    }

    simpleClick("div[data-type='valid']")
    window.scrollTo(0, document.body.scrollHeight);
  }


  const invalidator = () => {
    const handleSelect = (query: string, option: number) => {
      let select = document.querySelector(query) as HTMLSelectElement
      select.getElementsByTagName('option')[option].selected = true
      select.dispatchEvent(new Event('change'))
    }

    const simpleClick = (query: string) => {
      (document.querySelector(query) as HTMLDivElement)?.click();
    }

    simpleClick("div[data-type='invalid']")
    handleSelect('select[data-selectshow-name="invalid2-"]', 1)
    handleSelect('select[data-selectshow-name="invalid4-"]', 1)
    handleSelect('select[data-selectshow-name="invalid5-"]', 5)
    window.scrollTo(0, document.body.scrollHeight);
  }







  if (valid == true) {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: validator
    });

  } else if (valid == false) {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: invalidator

      // files: ["~src/utils/handleVerify/invalid.ts"],
    });

  }

  await chrome.tabs.update(tab.id, {
    active: true
  });


  res.send({
    "tab data": JSON.stringify(tab)
  })
}

export default handler