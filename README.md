# Anuradha
<b>Final year group project for CSE 2019-2023 batch.</b>
## Team Members
- [Debjit Pal](https://github.com/debjitpal5040)
- [Saheli Saha](https://github.com/sahelisaha2k)
- [Madhu Shaw](https://github.com/madhushaw1012)
- [Rajonya Mondal](https://github.com/rajonya-eng)

## Description
This is an intelligent AI Chatbot. It is capable of answering questions related to our college KGEC. It is trained on a dataset of questions and answers related to KGEC. It is capable of answering questions related to the college, its departments, its faculty, its infrastructure, its events, etc. It is also capable of answering questions related to the courses offered by the college, the admission process, the fee structure, the placement records, location, contact details of the college, college fest, college clubs, college library etc.

## Tools and Technologies
* Python
* Tensorflow
* Deep Learning
* Neural Networks
* Natural Language Processing
* Speech Recognition
* Text to Speech

## Roadmap

1. Collection of dataset which includes common questions along with the appropriate response. The dataset is basically a collection of json objects, that is later used for training of the model. The json file contains tags with corresponding patterns and responses which will be used to train the deep learning model.

2. The raw data collected goes through a series of steps to become ready for the model training. This includes tokenizing and lemmatization.

3. After the data is cleaned, the model is designed which will be trained with the clean data. It parses through the question given by the user and tries to search for the most appropriate answer.

4. Build a neural network model to be used on the dataset. It as of now has 5 layers including 3 hidden layers. There are total 256 neurons in the first hidden layer with leaky-relu activation function with alpha=0.2 applied with 25% dropout. In the second hidden layer, there are 128 neurons again with leaky-relu activation with alpha=0.2 and again 25% dropout. In the third hidden layer, there are 64 neurons again with leaky-relu activation with alpha=0.2 and again 25% dropout. The output layer contains softmax activation function.

5. Rigorous training and testing of the model to achieve the desired outcome. We have compiled our model with Adam optimiser, categorical crossentropy loss function and accuracy metric which has been trained with 200 epochs giving almost 96% testing accuracy and almost 70% validation accuracy.

As a result of the first phase of development, the chatbot is trained to take questions as text and respond as text. The next phase of development will be to make the chatbot capable of taking questions as speech and responding as speech.

In the second phase of development, two NEW features Voice Recognition and Text to Speech have been added to the chatbot to take commands in voice and respond to them with voice too.

1. Earlier the chatbot was only capable of reading input queries via text only. Now we have integrated the voice recognition functionality to the chatbot. Using SpeechRecognition module in Python it can listen to spoken words and identify them. Taking computer’s mic as the input source, the chatbot listens to the input given by the user. It uses Google speech recognition engine to convert our speech data to text data and then it tries to find the appropriate response using the trained model.

2. Also earlier the chatbot was only capable of responding to the queries via text only. Now we have integrated text to speech functionality to the chatbot. Using pyttsx3, a popular text-to-speech conversion library in Python, the chatbot can now respond using speech. Depending on the platform one is using, say Windows or Mac, the chatbot will sound different because of the different voice sets for respective engines.
