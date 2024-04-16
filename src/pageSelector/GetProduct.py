from selenium.webdriver import Chrome as Webdriver

def searchProduct(driver:Webdriver, keyword):
    main_link = driver.get(f"https://www.shoepalace.com/search?q={keyword}")
    

    