import html2canvas from "html2canvas";

const getScreenShot = async () => {
    const panel = document.querySelector('div[aria-label="panel-helper-extension"]') as HTMLDivElement

    html2canvas(document.body, {
        x: window.scrollX,
        y: window.scrollY,
        width: window.innerWidth,
        height: window.innerHeight,
        ignoreElements: (element: any) => element === panel

    })
        .then(canvas => canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
            .then(() => confirm('image copied to clipboard'))))


}
export default getScreenShot