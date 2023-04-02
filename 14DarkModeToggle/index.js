const inputElem = document.querySelector('.input');
const bodyElem = document.querySelector('body');

inputElem.checked = JSON.parse(localStorage.getItem('mode'));
console.log(inputElem.checked)

updateBody();

function updateBody () {
    if (inputElem.checked) {
        bodyElem.style.backgroundColor = 'black';
    } else {
        bodyElem.style.backgroundColor = 'white';
    }
}

inputElem.addEventListener('input', () => {
    updateBody();
    updateLocalStorage();
    console.log(inputElem.checked)
});

function updateLocalStorage () {
    localStorage.setItem('mode', JSON.stringify(inputElem.checked));
}