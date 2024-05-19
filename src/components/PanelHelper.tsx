
// import ScreenShot from "./ScreenShot"
import getScreenShot from "../utils/takeScreen"
import { handleSelect, simpleClick } from "../utils/DOMmanage"




export default function PanelHelper() {

    
    const handleClickValid = () => {
        (document.querySelector("div[data-type='valid']") as HTMLDivElement)?.click()
    }

    const handleClickInvalid = () => {
        // getScreenShot()
        simpleClick("div[data-type='invalid']")
        handleSelect('select[data-selectshow-name="invalid2-"]', 1)
        handleSelect('select[data-selectshow-name="invalid4-"]', 1)
        handleSelect('select[data-selectshow-name="invalid5-"]', 5)
        window.scrollTo(0, document.body.scrollHeight);
        // pasteInputFile()
    }



    return (
        <div aria-label="panel-helper-extension" className="fixed mx-auto w-full bottom-20 pointer-events-none   flex items-center justify-center">


            <div className="flex flex-col pointer-events-auto gap-2">

                <div className="flex text-center gap-2">

                    <div onClick={handleClickValid} className="cursor-pointer rounded-md px-4  bg-green-300 border-4 text-black border-green-900 bg-opacity-85">
                        correcto
                    </div>
                    <div onClick={handleClickInvalid} className="cursor-pointer rounded-md px-4  bg-red-300 border-4 text-black border-red-900 bg-opacity-85">
                        incorrecto
                    </div>

                </div>

                <div className="cursor-pointer rounded-md text-center px-4 bg-slate-300 border-4 text-black border-slate-900 bg-opacity-85">
                    captura
                </div>





            </div>
        </div>
    )
}