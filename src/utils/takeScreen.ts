import html2canvas from "html2canvas";

const getScreenShot = async () => {
    const panel = document.querySelector('div[aria-label="panel-helper-extension"]') as HTMLDivElement

    const canvas = await html2canvas(document.body, {
        x: window.scrollX,
        y: window.scrollY,
        width: window.innerWidth,
        height: window.innerHeight,
        ignoreElements: (element: any) => element === panel
        
    })

    canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]))


}
export default getScreenShot