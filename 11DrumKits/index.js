const kits = ['crash', 'kick', 'snare', 'tom'];
const containerElem = document.querySelector('.container');

kits.forEach((kit) => {
    const btnElem = document.createElement('button');
    btnElem.classList.add('btn');
    btnElem.innerText = kit;
    btnElem.style.backgroundImage = "url(images/" + kit + ".png)";
    containerElem.appendChild(btnElem);
    const audioElem = document.createElement('audio');
    audioElem.src = "sounds/" + kit + ".mp3";
    containerElem.appendChild(audioElem);
    btnElem.addEventListener('click', () => {
        audioElem.play();
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioElem.play();
            btnElem.style.transform = "scale(.9)";
            setTimeout(() => {
                btnElem.style.transform = "scale(1)";
            }, 100);
        }
    });
});

