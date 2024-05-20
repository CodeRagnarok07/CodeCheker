import { simpleClick, handleSelect } from "../DOMmanage"


simpleClick("div[data-type='invalid']")
handleSelect('select[data-selectshow-name="invalid2-"]', 1)
handleSelect('select[data-selectshow-name="invalid4-"]', 1)
handleSelect('select[data-selectshow-name="invalid5-"]', 5)
window.scrollTo(0, document.body.scrollHeight);