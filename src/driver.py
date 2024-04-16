from selenium import webdriver


from selenium.webdriver.chrome.service import Service

# PATH_CHROMEDRIVER = r"C:\chromedriver_win32\chromedriver.exe"

service = Service()
options = webdriver.ChromeOptions()

driver = webdriver.Chrome(service=service, options=options)

# webdriver.ChromeOptions()
