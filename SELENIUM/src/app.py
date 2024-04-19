from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

from driver import driver

PAGE_URL = "https://www.abbottatelier.com/"

def main():
    driver.get("https://www.abbottatelier.com/")
    element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, ("//*[contains(text(),'Add to cart')]")))) 
    
    driver.quit()
    
    # try:
    #     print(element.is_enabled())
    #         # element.click()
    #     print(element.accessible_name)
    #     print(element.is_enabled())
    #     print(element.tag_name)
        
    #     print(element.is_selected())
    # except:
    #     print("elemento no encontrado")
    # finally:
    #     print("fin busqueda de la compra")