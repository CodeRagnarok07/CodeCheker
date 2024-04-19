
import unittest

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

from driver import driver


class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = driver
        
    def test_open_page(self):
        driver = self.driver
        driver.get("https://www.abbottatelier.com/")
    def test_get_framework(self):
        driver = self.driver
        # <meta name="generator" content="WordPress 4.9.8" />
        
        metaTag = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, ("head>meta[name='generator']")))) 
        print(metaTag.get_attribute("content"))


    def test_add_produts_to_cart(self):    
        driver = self.driver
        
        
        try:
            element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, ("//*[contains(text(),'Add to cart')]")))) 
            print(element.is_enabled())
                # element.click()
            print(element.accessible_name)
            print(element.is_enabled())
            print(element.tag_name)
            
            print(element.is_selected())
            
        # except:
        #     self.assertNotIn("No results found.", driver.page_source)
        #     print("elemento no encontrado")
            
        finally:
            # //*[@id="quick-add-template--22007538647354__25848174-bc30-4c69-8c99-ecc7bf24d8b89105681547578-submit"]
            # //*[@id="quick-add-template--22007538647354__25848174-bc30-4c69-8c99-ecc7bf24d8b89105677058362-submit"]
           
            driver.quit()
            
    


if __name__ == "__main__":
    unittest.main()