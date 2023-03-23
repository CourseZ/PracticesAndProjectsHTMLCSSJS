const containerElem = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainerElem = document.createElement('div');
    colorContainerElem.classList.add('color-container');
    containerElem.appendChild(colorContainerElem);
}

const colorContainerElems = document.querySelectorAll('.color-container');

generatorColors();

function generatorColors() {
    colorContainerElems.forEach((colorContainerElem) => {
        const newColorCode = randomColor();
        colorContainerElem.style.backgroundColor = "#" + newColorCode;
        colorContainerElem.innerText = "#" + newColorCode;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
}