"""my_model.py"""
from datetime import datetime
from json import loads
import platform
from random import choice, shuffle
from string import punctuation
from keras import Sequential
from keras.layers import Dense, Dropout, LeakyReLU, Softmax
from keras.optimizers import Adam
from nltk import word_tokenize
from nltk.stem import WordNetLemmatizer
from numpy import array
import pyttsx3
import speech_recognition as sr

data = loads(open("dataset/intents.json", encoding="utf-8").read())

'''
nltk.download("punkt")
nltk.download("wordnet")
nltk.download('omw-1.4')
'''

lemmatizer = WordNetLemmatizer()

# Each list to create
words = []  # tokenized words of sentences in patterns
classes = []  # tags
doc_X = []  # patterns
doc_y = []  # tags ocurring number of times wrt patterns

'''Looping through all the intents and tokenizing each patterns and
appending tokens to words, patterns and associated tag to
their associated list'''
for intent in data["intents"]:
    for pattern in intent["patterns"]:
        tokens = word_tokenize(pattern)
        words.extend(tokens)
        doc_X.append(pattern)
        doc_y.append(intent["tag"])
    # add the tag to the classes if it's not there already
    if intent["tag"] not in classes:
        classes.append(intent["tag"])

# lemmatizing all the words in the vocab and
# converting them to lowercase if the words
# don't appear in punctuation
words = [lemmatizer.lemmatize(word.lower()) for word in words if word not in punctuation]

'''sorting the vocab and classes in alphabetical order
and taking the set to ensure no duplicates occur'''
words = sorted(set(words))
classes = sorted(set(classes))

print("lenght of words: ", len(words))
print("length of doc_X", len(doc_X))
print("length of doc_y", len(doc_y))
print("length of classes", len(classes))

# list for training data
training = []

# creating the bag of words model
for idx, doc in enumerate(doc_X):
    bow = []
    # lemmatizing the sentence and converting to lowercase
    text = lemmatizer.lemmatize(doc.lower())
    for word in words:
        # one hot encoding the words if they appear in the text
        if word in text:
            bow.append(1)
        else:
            bow.append(0)
    output_row = [0] * len(classes)
    # marking the index of class that the current pattern is associated to as 1
    output_row[classes.index(doc_y[idx])] = 1
    # adding the one hot encoded BoW and associated classes to training
    training.append([bow, output_row])


# shuffling the data and convert it to a numpy array
shuffle(training)
training = array(training, dtype=object)

# splitting the features and target labels
train_X = array(list(training[:, 0]))  # features
train_y = array(list(training[:, 1]))  # target labels


print(train_X)
print(train_y)

print(f"Shape of train_X: {train_X.shape}")
print(f"Shape of train_y: {train_y.shape}")

# defining some parameters
input_shape = (len(train_X[0]),)
output_shape = len(train_y[0])
print("input_shape: ", input_shape)
print("output_shape: ", output_shape)

# defining the model
model = Sequential()
model.add(Dense(128, input_shape=input_shape, activation=LeakyReLU(alpha=0.3)))
model.add(Dropout(0.25))
model.add(Dense(64, activation=LeakyReLU(alpha=0.3)))
model.add(Dropout(0.25))
model.add(Dense(output_shape, activation=Softmax()))

# compiling the model
adam = Adam(learning_rate=0.01)
model.compile(loss='categorical_crossentropy', optimizer=adam, metrics=["accuracy"])

print(model.summary())

model.fit(x=train_X, y=train_y, epochs=200)


def clean_text(txt):
    """function to tokenize and then lemmatize and
    returning the tokens array"""
    tkns = word_tokenize(txt)
    tkns = [lemmatizer.lemmatize(word) for word in tkns]
    return tkns


def bag_of_words(txt, vocab):
    """function to get the bag of words and one hot
    encoding the words if they appear in the text and
    returning numpy array of bow"""
    tkns = clean_text(txt)
    baw = [0] * len(vocab)
    for tok in tkns:
        for index, wrd in enumerate(vocab):
            if wrd == tok:
                baw[index] = 1
    return array(baw)


def pred_class(txt, vocab, labels):
    """function to predict the class"""
    baw = bag_of_words(txt, vocab)
    rslt = model.predict(array([baw]))[0]
    thresh = 0.2
    y_pred = [[idx, res] for idx, res in enumerate(rslt) if res > thresh]
    y_pred.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for res in y_pred:
        return_list.append(labels[res[0]])
    return return_list


def get_response(intents_list, intents_json):
    """taking the predicted class and returning
    a random response from the intents.json file"""
    tag = intents_list[0]
    list_of_intents = intents_json["intents"]
    for i in list_of_intents:
        if i["tag"] == tag:
            rslt = choice(i["responses"])
            break
    return rslt


now = datetime.now()
engine = pyttsx3.init()
r = sr.Recognizer()
mic = sr.Microphone()

if platform.system() == "Windows":  # for Windows
    engine.setProperty('voice', r"HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0")
elif platform.system() == "Darwin":  # for macOS
    engine.setProperty('voice', "com.apple.speech.synthesis.voice.samantha")
else:
    pass

TEXT = "Anuradha is ready to chat! (say 'exit' to quit)"
print(TEXT)
engine.say(TEXT)
engine.runAndWait()

while True:
    with mic as source:
        r.adjust_for_ambient_noise(source)
        r.dynamic_energy_threshold = True
        print("Say Now")
        audio = r.record(source, duration=3)
    try:
        # message = input("You : ")
        message = r.recognize_google(audio, language="en-IN")
        intents = pred_class(message, words, classes)
        result = get_response(intents, data)
        if message == 'exit':
            TEXT = "Bye! take care"
            break
        elif result == "date":
            TEXT = now.strftime(r'%d/%m/%Y')
        elif result == "time":
            TEXT = now.strftime(r'%H:%M:%S')
        else:
            TEXT = result
    except sr.UnknownValueError:
        TEXT = "Sorry, I didn't get that"
    except sr.RequestError as e:
        TEXT = "Sorry, can't connect to the service"
    finally:
        try:
            print("You :", message)
        except NameError:
            pass
        finally:
            print("Anuradha :", TEXT)
            engine.say(TEXT)
            engine.runAndWait()
