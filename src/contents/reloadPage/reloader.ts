
console.log("RELOADER")

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
    console.log("push verify")

    setInterval(Redirect, 8000); // 4000 milisegundos equivalen a 4 segundo3
} else if (window.location.href == verifyURL) {
    if (localStorage.getItem("prevUrl") == "https://simplycodes.com/editor") {
        localStorage.setItem("prevUrl", window.location.href)
        audio.play();
    }

}