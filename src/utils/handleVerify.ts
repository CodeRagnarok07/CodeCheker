// import { simpleClick, handleSelect } from "./DOMmanage"

const handleSelect = (query: string, option: number) => {
    let select = document.querySelector(query) as HTMLSelectElement
    select.getElementsByTagName('option')[option].selected = true
    select.dispatchEvent(new Event('change'))
}
const simpleClick = (query: string) => {
    (document.querySelector(query) as HTMLDivElement)?.click();
}
const handleTyping = (query: string, text: string) => {
    const inputText = document.querySelector(query) as HTMLInputElement
    inputText.value = text
    inputText.dispatchEvent(new Event('input'))
}



export const handleOffline = () => {
    const simpleClick = (query: string) => {
        (document.querySelector(query) as HTMLDivElement)?.click();
    }
    const handleSelect = (query: string, option: number) => {
        let select = document.querySelector(query) as HTMLSelectElement
        select.getElementsByTagName('option')[option].selected = true
        select.dispatchEvent(new Event('change'))
    }
    const handleTyping = (query: string, text: string) => {
        const inputText = document.querySelector(query) as HTMLInputElement
        inputText.value = text
        inputText.dispatchEvent(new Event('input'))
    }

    simpleClick("#app>div.page.tac>div>span.fs13")
    handleSelect('#skip-div>select', 1)
    handleSelect('#skip-reason', 1)
   
    handleTyping("#skip-details", (document.querySelector(" #skip-reason>option:nth-child(2)") as HTMLInputElement).innerText as string)
    window.scrollTo(0, document.body.scrollHeight);
}
export const validator = () => {
    const handleSelect = (query: string, option: number) => {
      let select = document.querySelector(query) as HTMLSelectElement
      select.getElementsByTagName('option')[option].selected = true
      select.dispatchEvent(new Event('change'))
    }

    const simpleClick = (query: string) => {
      (document.querySelector(query) as HTMLDivElement)?.click();
    }

    simpleClick("div[data-type='valid']")
    window.scrollTo(0, document.body.scrollHeight);
  }


export const invalidator = () => {
    const handleSelect = (query: string, option: number) => {
      let select = document.querySelector(query) as HTMLSelectElement
      select.getElementsByTagName('option')[option].selected = true
      select.dispatchEvent(new Event('change'))
    }

    const simpleClick = (query: string) => {
      (document.querySelector(query) as HTMLDivElement)?.click();
    }

    simpleClick("div[data-type='invalid']")
    handleSelect('select[data-selectshow-name="invalid2-"]', 1)
    handleSelect('select[data-selectshow-name="invalid4-"]', 1)
    handleSelect('select[data-selectshow-name="invalid5-"]', 5)
    window.scrollTo(0, document.body.scrollHeight);
  }