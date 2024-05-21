import type { PlasmoMessaging } from "@plasmohq/messaging"
import { handleOffline, validator, invalidator } from "../../utils/handleVerify"




const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

  const { valid } = req.body
  let [tab] = await chrome.tabs.query({ url: ["https://simplycodes.com/editor/verify"] });

  await chrome.tabs.update(tab.id, {
    active: true
  });
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    func: valid == null ? handleOffline : valid == false ? invalidator : valid == true && validator
  });


  // if (valid == true) {
  //   chrome.scripting.executeScript({
  //     target: {
  //       tabId: tab.id,
  //     },
  //     func: validator
  //   });

  // } else if (valid == false) {
  //   chrome.scripting.executeScript({
  //     target: {
  //       tabId: tab.id,
  //     },
  //     func: invalidator

  //     // files: ["~src/utils/handleVerify/invalid.ts"],
  //   })
  // }else if(valid == null){
  //   chrome.scripting.executeScript({
  //     target: {
  //       tabId: tab.id,
  //     },
  //     // files: ["~src/utils/test_script.ts"],
  //     func: handleOffline
  //   });
  // }

  res.send({
    "tab data": JSON.stringify(tab)
  })
}

export default handler