"""views.py"""

from random import choice

from django.http import HttpResponse
from django.shortcuts import render
from keras.saving import load_model
from nltk import word_tokenize
from numpy import array

from chatKGEC.chatKGEC import classes, data, lemmatizer, words

# load model
model = load_model("notebook/chatKGEC.keras")


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
    if model is None:  # Handle case where model is not defined
        return None
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
    result = ""
    for i in list_of_intents:
        if i["tag"] == tag:
            result = choice(i["responses"])
            break
    return result


def index(req):
    """View function for home page of site."""
    return render(req, "index.html")


def predict(message):
    """View function for prediction page of site."""
    intents = pred_class(message, words, classes)
    result = get_response(intents, data)
    print(result)
    return result


def about(req):
    """View function for about page of site."""
    return render(req, "about.html")


def chat(req):
    """View function for chat page of site."""
    return render(req, "chat.html")


def getResponse(request):
    """Function for getting response from the model."""
    msg = request.GET.get("msg")
    dat = predict(msg)
    return HttpResponse(dat)
