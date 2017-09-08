var button=document.querySelector(".hotel-search");
var popup=document.querySelector(".appointment-wrapper8");
var dateIn = popup.querySelector("[name=date-in]");
var form = popup.querySelector("form");
var dateOut = popup.querySelector("[name=date-out]");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
    dateIn.focus();

})

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!dateIn.value || !dateOut.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
        console.log("Нужно заполнить все поля");
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("appointment-wrapper8")) {
            popup.classList.remove("appointment-wrapper8");
        }
    }
});
