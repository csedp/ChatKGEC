
# # import speech_recognition as sr
# # r = sr.Recognizer()
# # mic = sr.Microphone()
# # # for i, microphone_name in enumerate(mic.list_microphone_names()):
# # #     print(microphone_name)
# # with mic as source:
# #     r.adjust_for_ambient_noise(source)
# #     r.dynamic_energy_threshold = True
# #     # r.pause_threshold = 0.8
# #     print("say now")
# #     audio = r.record(source, duration=3)
# # message = r.recognize_google(audio, language="en-IN")
# # print("You :", message)
# # import platform
# import pyttsx3
# engine = pyttsx3.init()
# pos=['com.apple.speech.synthesis.voice.veena.premium', 'com.apple.speech.synthesis.voice.samantha']
# VOICE_ID = "com.apple.speech.synthesis.voice.veena.premium"  # for macOS
# if platform.system() == "Windows":  # for Windows
#     VOICE_ID = r"HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0"
# engine.setProperty('voice', VOICE_ID)
# # engine.setProperty('rate', 200)
# engine.say("From the comfort of our modern lives we tend to look back at the turn of the twentieth century as a dangerous time for sea travellers. With limited communication facilities, and shipping technology still in its infancy in the early nineteen hundreds, we consider ocean travel to have been a risky business. But to the people of the time it was one of the safest forms of transport. At the time of the Titanic’s maiden voyage in 1912, there had only been four lives lost in the previous forty years on passenger ships on the North Atlantic crossing. And the Titanic was confidently proclaimed to be unsinkable. She represented the pinnacle of technological advance at the time. Her builders, crew and passengers had no doubt that she was the finest ship ever built. But still she did sink on April 14, 1912, taking 1,517 of her passengers and crew with her.")
# engine.runAndWait()

import platform
print(platform.system())