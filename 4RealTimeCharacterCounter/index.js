const textareaElem = document.getElementById("textarea");
const totalCounterElem = document.getElementById("total-counter");
const remainingCouterElem = document.getElementById("remaining-counter");

textareaElem.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter();

function updateCounter() {
    totalCounterElem.innerText = textareaElem.value.length;
    remainingCouterElem.innerText = textareaElem.getAttribute("maxlength") - textareaElem.value.length;
}