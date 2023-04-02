const imageContainerElem = document.querySelector('.image-container');
const btnElem = document.querySelector('.btn');

btnElem.addEventListener('click', () => {
    let imageNum = 10;
    addNewImage(imageNum);
});

function addNewImage(imageNum) {
    for (let index = 0; index < imageNum; index++) {
        const newImageElem = document.createElement('img');
        newImageElem.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 200)}`;
        imageContainerElem.appendChild(newImageElem);
    }
}