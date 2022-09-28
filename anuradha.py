import platform
import datetime
import webbrowser
import speech_recognition as sr
import pyttsx3
import wikipedia
from attributes import pred_class, get_response
from model import classes, words, data
r = sr.Recognizer()
engine = pyttsx3.init()
VOICE_ID = "com.apple.speech.synthesis.voice.veena" # for macOS
if platform.system() == "Windows": # for Windows
    VOICE_ID = r"HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0"
engine.setProperty('voice', VOICE_ID)
engine.setProperty('rate', 150)
engine.setProperty('volume', 0.7)
print("Anuradha is ready to chat! (say 'exit' to quit)")

while True:
    now = datetime.datetime.now()
    # with sr.Microphone() as source:
    #     r.adjust_for_ambient_noise(source)
    #     r.dynamic_energy_threshold = True
    #     audio = r.record(source, duration=3)
    try:
        # message = r.recognize_google(audio, language="en-IN")
        message=input("You : ")
        # print("You :",message)
        if message == 'exit':
            TEXT = "Bye! take care"
            engine.say(TEXT)
            print("Anuradha :",TEXT)
            engine.runAndWait()
            break
        elif message == 'time':
            print(now.strftime("The time is %H:%M"))
            engine.say(now.strftime("The time is %H:%M"))
            engine.runAndWait()
        elif message == 'browser':
            webbrowser.open('www.youtube.com')
        elif message == 'dinosaur':
            print(wikipedia.summary(message))
            engine.say(wikipedia.summary(message))
            engine.runAndWait()
        # userInput3 = input("or else search in google")
        # webbrowser.open_new('www.google.com/search?q=' + userInput3)
        else:
            intents = pred_class(message, words, classes)
            result = get_response(intents, data)
            engine.say(result)
            print("Anuradha :",result)
            engine.runAndWait()
    except sr.UnknownValueError:
        # if len(message) == 0:
        #     TEXT = "Anuradha is listening..."
        #     print("Anuradha :",TEXT)
        # else:
        #     TEXT = "Sorry! I didn't get that. Can you repeat?"
        #     print("Anuradha :",TEXT)
        #     engine.say(TEXT)
        #     engine.runAndWait()
        print("Anuradha is listening...")
    except sr.RequestError as e:
        print("Can't connect to the internet")
        print("Please check you network")
