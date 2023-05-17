function getBotResponse() {
    var rawText = $("#textInput").val();
    var userHtml = '<p class="userText"><span>' + rawText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById('userInput').scrollIntoView({ block: 'start', behavior: 'smooth' });
    $.get("/getResponse", { msg: rawText }).done(function (data) {
        var botHtml = '<p class="botText"><span>' + data + '</span></p>';
        $("#chatbox").append(botHtml);
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-IN";
        let voices = [];
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[1];
        speech.text = data;
        speech.rate = 0.75;
        speech.volume = 2;
        speech.pitch = 1.5;
        window.speechSynthesis.speak(speech);
        document.getElementById('userInput').scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
}
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getBotResponse();
    }
});
$("#buttonInput").click(function () {
    getBotResponse();
})

// speech recognition api
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-IN";
recognition.onstart = function () {
    console.log("voice is activated, you can speak to microphone");
}
recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    $("#textInput").val(transcript);
    getBotResponse();
}
$("#microphone").click(function () {
    recognition.start();
})