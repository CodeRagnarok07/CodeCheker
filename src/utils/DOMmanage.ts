export const handleSelect = (query: string, option: number) => {
    let select = document.querySelector(query) as HTMLSelectElement
    select.getElementsByTagName('option')[option].selected = true
    select.dispatchEvent(new Event('change'))
}
export const simpleClick = (query: string) => {
    (document.querySelector(query) as HTMLDivElement)?.click();
}