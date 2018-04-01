var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".write-us-box");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-box-show");
});
