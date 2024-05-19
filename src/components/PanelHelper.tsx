
import ScreenShot from "./ScreenShot"

const handleSelect = (query:string, option:number)=>{
    let select = document.querySelector(query) as HTMLSelectElement
    select.getElementsByTagName('option')[option].selected = true
    select.dispatchEvent(new Event('change'))
}
const simpleClick = (query:string)=>{
    (document.querySelector(query)as HTMLDivElement)?.click();
}



export default function PanelHelper() {

    



    const handleClickValid = () => {
        (document.querySelector("div[data-type='valid']")as HTMLDivElement)?.click()
    }

    const handleClickInvalid = () => {
        simpleClick("div[data-type='invalid']")
        handleSelect('select[data-selectshow-name="invalid2-"]', 1)
        handleSelect('select[data-selectshow-name="invalid4-"]', 1)
        handleSelect('select[data-selectshow-name="invalid5-"]', 5)
    }



    return (
        <div className="fixed mx-auto w-full bottom-40 pointer-events-none   flex items-center justify-center">


            <div className="flex flex-col pointer-events-auto gap-2">

                <div className="flex text-center gap-2">

                    <div onClick={handleClickValid} className="cursor-pointer rounded-md px-4 py-2 bg-green-300 border-4 text-black border-green-900 bg-opacity-85">
                        correcto
                    </div>
                    <div onClick={handleClickInvalid}  className="cursor-pointer rounded-md px-4 py-2 bg-red-300 border-4 text-black border-red-900 bg-opacity-85">
                        incorrecto
                    </div>

                </div>

            <ScreenShot/>



            </div>
        </div>
    )
}