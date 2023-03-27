const containerElem = document.querySelector('.container');
const btnElem = document.querySelector('.btn');
const popupContainerElem = document.querySelector('.popup-container');
const closeElem = document.querySelector('.close-icon');

btnElem.addEventListener('click', () => {
    containerElem.classList.add('active');
    popupContainerElem.classList.remove('active');
});

closeElem.addEventListener('click', () => {
    containerElem.classList.remove('active');
    popupContainerElem.classList.add('active');
});