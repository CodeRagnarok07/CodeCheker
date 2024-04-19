import time

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

from src.driver import driver

br = "".join("-" for i in range(10))

def getElement(driver:webdriver.Chrome, term:str):
    s = '//*[contains(text(),"%s")]'
    
    try:
        element =  driver.find_element(By.XPATH, s % (term))
        print("✅ elemento encontrado")
        
        print(element.parent)
        print(element.is_enabled())
    except NoSuchElementException:
        print("elemento no encontrado")
    
    
        


def main():
    PAGE_URL = "https://www.abbottatelier.com/"
    driver.get(PAGE_URL)
    
    print("carga completad")
    
    getElement(driver, "Add to cart")
    
    

    print(br)
    print("tarea completada, cierre")
    driver.quit()



if __name__ == "__main__":
    main()