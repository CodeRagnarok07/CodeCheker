import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"



export const config: PlasmoCSConfig = {
  matches: ["https://simplycodes.com/editor", "https://simplycodes.com/editor/verify"]
}

const storage = new Storage({
  area: "local"
})



window.addEventListener("load", async() => {
  const urlSound = "https://cdn.pixabay.com/audio/2024/02/19/audio_e4043ea6be.mp3"
  const audio = new Audio(urlSound);
  const editorURL = "https://simplycodes.com/editor"
  const verifyURL = 'https://simplycodes.com/editor/verify'

  function Redirect() {
    if (localStorage.getItem("prevUrl") !== window.location.href) {
      localStorage.setItem("prevUrl", window.location.href)
    }
    window.location.href = verifyURL;
  }

  if (window.location.href == editorURL) {
    setInterval(Redirect, 5000); // 4000 milisegundos equivalen a 4 segundo3
  } else if (window.location.href == verifyURL) {
    if (localStorage.getItem("prevUrl") == "https://simplycodes.com/editor") {
      localStorage.setItem("prevUrl", window.location.href)
      audio.play();
    }
  }


})