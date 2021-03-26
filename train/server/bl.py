from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import email
import imaplib
import time


def choose_location(driver, from_name, to_name):
    from_loc = driver.find_element(By.XPATH, "//input[@placeholder='מאיפה?']")
    from_loc.send_keys(from_name)
    driver.find_element_by_id("li-item-1").click()

    to_loc = driver.find_element(By.XPATH, "//input[@placeholder='לאן?']")
    to_loc.send_keys(to_name)
    driver.find_element_by_id("li2-item-1").click()

    driver.find_element(By.XPATH, "//button[@ng-click='getAllData()']").click()
    time.sleep(3)


def close_popups(driver):
    try:
        driver.find_element_by_id("ZA_CANVAS_763351_CLOSE_X2_13_IMG").click()
        time.sleep(1)
    except:
        print("no-popup1")
    try:
        driver.find_element_by_id("btnClosePopUpNotification").click()
    except:
        print("no-popup2")


def type_field(driver, elem_id, value):
    driver.execute_script("document.getElementById('" + elem_id + "').focus()")
    driver.execute_script("document.getElementById('" + elem_id + "').click()")
    sendNumbers(driver.find_element_by_id(elem_id), value)


def sendNumbers(elem, value):
    for num in value:
        elem.send_keys(getNumpadNum(num))


def getNumpadNum(num):
    return {
        "0": Keys.NUMPAD0,
        "1": Keys.NUMPAD1,
        "2": Keys.NUMPAD2,
        "3": Keys.NUMPAD3,
        "4": Keys.NUMPAD4,
        "5": Keys.NUMPAD5,
        "6": Keys.NUMPAD6,
        "7": Keys.NUMPAD7,
        "8": Keys.NUMPAD8,
        "9": Keys.NUMPAD9,
    }[num]


def get_sms():
    pass


def orderTrain(id_num, phone, email, from_name, to_name):
    driver = webdriver.Chrome()
    driver.get("http://www.rail.co.il")

    choose_location(driver, from_name, to_name)

    close_popups(driver)

    driver.find_elements_by_class_name("jerusalem-voucher")[0].click()
    time.sleep(1)

    type_field(driver, 'card-number', id_num)
    type_field(driver, 'mobile', phone)

    driver.find_element_by_id("agree").click()
    time.sleep(1)

    driver.find_element(By.XPATH, '//button[@class="ng-binding"]').click()

    time.sleep(15)
    num = get_sms()
    print(num)
    type_field(driver, 'voucherTokenMessage', str(num))

    driver.find_element_by_id("BtnPopUup").click()

    # TODO: close chrome!!
