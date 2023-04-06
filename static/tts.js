let speech = new SpeechSynthesisUtterance();
speech.lang = "en-IN";
let voices = [];
voices = window.speechSynthesis.getVoices();
speech.voice = voices[0];
speech.text = data;
window.speechSynthesis.speak(speech);
