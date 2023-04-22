//Get the button
let mybutton = document.getElementById("btn-back-to-top");
mybutton.style.visibility = "hidden";

// When the user scrolls down 150px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybutton.style.visibility = "visible";
    }
    else {
        mybutton.style.visibility = "hidden";
    }
}

window.onscroll = function () {
    scrollFunction();
};
// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", backToTop);