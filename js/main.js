var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".write-us-box");
var close = document.querySelector(".button-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-box-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-box-show");
});
 