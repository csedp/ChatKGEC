"""chatKGEC is a chatbot that can be used to answer queries related to KGEC"""

from json import loads
from random import shuffle
from string import punctuation

import nltk
from nltk import word_tokenize
from nltk.stem import WordNetLemmatizer
from numpy import array

nltk.download("punkt")
nltk.download("wordnet")
nltk.download("omw-1.4")
nltk.download("punkt_tab")

data = loads(open("dataset/intents.json", encoding="utf-8").read())
lemmatizer = WordNetLemmatizer()
# Each list to create
words = []  # tokenized words of sentences in patterns
classes = []  # tags
doc_X = []  # patterns
doc_y = []  # tags ocurring number of times wrt patterns

"""Looping through all the intents and tokenizing each patterns and
appending tokens to words, patterns and associated tag to
their associated list"""
for intent in data["intents"]:
    for pattern in intent["patterns"]:
        tokens = word_tokenize(pattern)
        words.extend(tokens)
        doc_X.append(pattern)
        doc_y.append(intent["tag"])
    # add the tag to the classes if it's not there already
    if intent["tag"] not in classes:
        classes.append(intent["tag"])


words = [
    lemmatizer.lemmatize(word.lower()) for word in words if word not in punctuation
]

words = sorted(set(words))
classes = sorted(set(classes))

training = []

for idx, doc in enumerate(doc_X):
    bow = []
    text = lemmatizer.lemmatize(doc.lower())
    for word in words:
        if word in text:
            bow.append(1)
        else:
            bow.append(0)
    output_row = [0] * len(classes)
    output_row[classes.index(doc_y[idx])] = 1
    training.append([bow, output_row])


shuffle(training)
training = array(training, dtype=object)

train_X = array(list(training[:, 0]))
train_y = array(list(training[:, 1]))

input_shape = (len(train_X[0]),)
output_shape = len(train_y[0])

TEXT = "chatKGEC is ready to chat!"
print(TEXT)
