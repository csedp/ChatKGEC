from keras.models import load_model
from model import word_tokenize, lemmatizer, np, random
model = load_model("chatbot_model.h5")
def pred_class(tet, vocab, labels):
    '''
    tet: text
    vocab: vocabulary
    labels: labels
    '''
    def bag_of_words(tex, vocab):
        def clean_text(txt):
            tkns = word_tokenize(txt)
            tkns = [lemmatizer.lemmatize(word) for word in tkns]
            return tkns
        token = clean_text(tex)
        b_w = [0] * len(vocab)
        for _w in token:
            for index, _word in enumerate(vocab):
                if _word == _w:
                    b_w[index] = 1
        return np.array(b_w)
    _bow = bag_of_words(tet, vocab)
    result = model.predict(np.array([_bow]))[0]
    thresh = 0.2
    y_pred = [[idx, res] for idx, res in enumerate(result) if res > thresh]
    y_pred.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for _r in y_pred:
        return_list.append(labels[_r[0]])
    return return_list


def get_response(intents_list, intents_json):
    '''
    intents_list: list of intents
    intents_json: intents json file
    '''
    tag = intents_list[0]
    list_of_intents = intents_json["intents"]
    for i in list_of_intents:
        if i["tag"] == tag:
            result = random.choice(i["responses"])
            break
    return result
