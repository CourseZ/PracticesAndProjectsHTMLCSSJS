const nextElem = document.querySelector('.next');
const prevElem = document.querySelector('.prev');
const imgsElem = document.querySelectorAll('img');
const imageContainerElem = document.querySelector('.image-container');

let currentImage = 1;
let timeout;

nextElem.addEventListener('click', () => {
    currentImage++;
    clearTimeout(timeout);
    updateImg();
});

prevElem.addEventListener('click', () => {
    currentImage--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg() {
    if (currentImage > imgsElem.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = imgsElem.length;
    }
    imageContainerElem.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImage++;
        updateImg();
    }, 3000);
}