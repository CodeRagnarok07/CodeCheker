
// import ScreenShot from "./ScreenShot"
import { sendToBackground } from "@plasmohq/messaging"

import { handleSelect, simpleClick } from "../../utils/DOMmanage"
import getScreenShot from "~src/utils/takeScreen"




export default function PanelHelper() {

    const awaitWork = 250
    const handleClickValid = async () => {
        // await getScreenShot()
        sendToBackground({
            name: "to_verify_page",
            body: {
                valid: true
            }
        })


    }

    const handleClickInvalid = async () => {
        // await getScreenShot()
        sendToBackground({
            name: "to_verify_page",
            body: {
                valid: false
            }
        })
    }



    return (
        <div aria-label="panel-helper-extension" className="fixed mx-auto w-full left-[0%] bottom-[0%] pointer-events-none   flex items-center justify-center">
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