"""views.py"""
import pyttsx3
from django.shortcuts import render
from random import choice
from numpy import array
from keras.models import load_model
from nltk import word_tokenize
from anu.anuradha import words, classes, data, lemmatizer
# load model
model = load_model('notebook/model.h5')

def clean_text(text):
    """function to tokenize and then lemmatize and
    returning the tokens array"""
    tokens = word_tokenize(text)
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    return tokens

def bag_of_words(text, vocab):
    """function to get the bag of words and one hot
    encoding the words if they appear in the text and
    returning numpy array of bow"""
    tokens = clean_text(text)
    bow = [0] * len(vocab)
    for tok in tokens:
        for idx, word in enumerate(vocab):
            if word == tok:
                bow[idx] = 1
    return array(bow)

def pred_class(text, vocab, labels):
    """function to predict the class"""
    bow = bag_of_words(text, vocab)
    result = model.predict(array([bow]))[0]
    thresh = 0.2
    y_pred = [[idx, res] for idx, res in enumerate(result) if res > thresh]
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
            result = choice(i["responses"])
            break
    return result

def index(req):
    """View function for home page of site."""
    return render(req, 'index.html')

def predict(req):
    """View function for prediction page of site."""
    message = req.POST['query']
    intents = pred_class(message, words, classes)
    result = get_response(intents, data)
    # engine = pyttsx3.init()
    # engine.say(result)
    # engine.runAndWait()
    # engine = None
    return result

def result(pred):
    """View function for result page of site."""
    data = predict(pred)
    return render(pred, 'result.html', {'data': data})
