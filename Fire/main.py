import cv2
import numpy as np
import playsound
import requests
import json

Alarm_Status = False
Email_Status = False
Fire_Reported = 0

phone_number="0934567894"
import requests
def getIPInfo():

    response = requests.get('http://ipinfo.io/json', params='8fbc60119ad527')
    return response.json()
def callApi(code):
    url = "http://localhost:8080/api/save"

    payload = json.dumps({
        "code":code
    })
    headers = {
        'Content-Type': 'application/json'
    }

    return requests.request("POST", url, headers=headers, data=payload)
video = cv2.VideoCapture(0)
while True:
    (grabbed, frame) = video.read()
    if not grabbed:
        break

    frame = cv2.resize(frame, (960, 540))

    blur = cv2.GaussianBlur(frame, (21, 21), 0)
    hsv = cv2.cvtColor(blur, cv2.COLOR_BGR2HSV)

    lower = [18, 50, 50]
    upper = [35, 255, 255]
    lower = np.array(lower, dtype="uint8")
    upper = np.array(upper, dtype="uint8")

    mask = cv2.inRange(hsv, lower, upper)

    output = cv2.bitwise_and(frame, hsv, mask=mask)

    no_red = cv2.countNonZero(mask)

    if int(no_red) > 15000:
        Fire_Reported = Fire_Reported + 1
        dem=0
        if Fire_Reported >=1:
            dem=dem+1
            info=getIPInfo()
            # latitude=info["loc"].split(",")[0]
            # longitude=info["loc"].split(",")[1]
            city=info["city"]
            # ip=info["ip"]
            if Alarm_Status == False:
                res = callApi(phone_number)
                print("ok")
                Alarm_Status= True
    cv2.imshow("output", output)


cv2.destroyAllWindows()
video.release()