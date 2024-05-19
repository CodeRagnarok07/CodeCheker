import screenshot from 'screenshot-desktop'

function download(canvas, filename) {
    const data = canvas.toDataURL("image/png;base64");

}


function takeScreenshotFromNode() {
    var screenshot = document.createElement('div')
    screenshot.appendChild(document.querySelector('body').cloneNode(true));

    var blob = new Blob([screenshot.outerHTML], {
        type: 'image/png'
    });
    createImageBitmap(blob)

    return blob;
}



export default function ScreenShot() {

    const displayMediaOptions = {
        video: true,
        preferCurrentTab: true,
    };

    const node_video = document.getElementById('video') as HTMLVideoElement
    const getScreenShot = async() => {

        const img = await screenshot()

        console.log(img)

    }



    return (

        <div>

            <div onClick={getScreenShot} className="cursor-pointer rounded-md text-center px-4 py-2 bg-slate-300 border-4 text-black border-slate-900 bg-opacity-85">
                captura
            </div>
        </div>

    )
}