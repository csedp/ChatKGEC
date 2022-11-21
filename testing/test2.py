import pyttsx3
engine = pyttsx3.init()
fem=[]
for voice in engine.getProperty('voices'):
    fem.append([voice.id, voice.name, voice.gender, voice.languages])
for i in fem:
    print(i)