# Anuradha
This is an intelligent AI Chatbot. It is capable of answering questions related to various activities.

<b>Final year group project for CSE 2019-2023 batch.</b>

## Team Members
- [Debjit Pal](https://github.com/debjitpal5040)
- [Madhu Shaw](https://github.com/madhushaw1012)
- [Rajonya Mondal](https://github.com/rajonya-eng)
- [Saheli Saha](https://github.com/sahelisaha2k)


## Roadmap
	
1. Collection of data from other available assistants like Google Assistant/Siri/Alexa. I think it will be a good source of data as they are the industry standards. We will give standard inputs along with their different versions repeatedly to them and note down the responses they provide in return. 

2. Cleaning of Raw data and taking only necessary things and storing them in JSON format. Collect as much data as possible. If we train our model with different types of huge datasets, our model will surely perform exceptionally good.

3. Data preparation part is important. We have to prepare the data in a format such that we can train it. The NLP methods will be useful here to convert plaintext English to inputs of our neural network.

4. Train the model using various deep learning methods. Our goal will be to maximise the accuracy of our model and minimise the errors made by it. So we will try different activation functions, cost functions, an increasing number of hidden layers etc. to get the best model (Tuning the hyperparameters via trail and error and getting the best result).

5. Initially we will build a text-based input-taking output-giving assistant only. In subsequent stages, we will implement a speech-based recognition system where our assistant will be able to understand our voice commands. Also they will reply in voice too.

6. In final stage we will build a nice web based UI for our model (preferably in Django) rather than running our assistant in terminal. 

7. Documentation part where we will have to make a formal report and a demonstration video/ppt for showcasing to teachers.


## Checkpoints

	1. Data Collection
	
Below a sample data is given. We have to collect as many data as possible in the below dictionary format and store in a json file.  
 ![image](https://user-images.githubusercontent.com/76846542/192753081-733fcc02-8cd3-4e5a-bc6a-85bb8a02d25c.png)
This will be our training data. The more we provide the data; the more accurate our model will be. The model will search for specific keywords in the database and return the response having the highest probability. 

	2. OOP in Python
  
We will be using python for the whole project. But OOP concepts will be helpful here for our projects. So check them out if it is unknown.

	3. Basics of DL and NN
	
The model training will be trained using various deep learning models. I will suggest to get familiar with some basic concepts of NN. 
Make Sure to get familiar with the following terms :- Activation functions, Loss Functions, Forward and backward propagation, weights and biases.
<img width="756" alt="image" src="https://user-images.githubusercontent.com/76846542/192753701-a1bb738c-6e9b-4119-8469-07c6e084f586.png">
	
	4. Tensorflow/Pytorch
	
Now for the coding of the model building part. It has to be done either on tensorflow or in pytorch. Both are popular libraries used in training deep learning models. We will implement our model using any one of them. Although it is quite impossible to learn them whole but we can just get familiar with the necessary syntaxes as we only need to use a small part of them.
	
	5. Basics of NLP and Speech Recognition
  
The project is mainly dependent on Natural Language Processing. It is recommended to read about it from the web and get familiar with common terms and concepts of NLP and speech recognition.
