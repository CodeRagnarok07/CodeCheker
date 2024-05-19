import type { PlasmoMessaging } from "@plasmohq/messaging"
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

  let [tab] = await chrome.tabs.query({url: "https://simplycodes.com/editor/verify"});
  await chrome.tabs.update(tab.id, {
    active: true
  });
  
 
  res.send({
    "tab data": JSON.stringify(tab)
  })
}
 
export default handler