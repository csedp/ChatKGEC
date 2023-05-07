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
        speech.voice = voices[0];
        speech.text = botHtml;
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