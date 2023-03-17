const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");

function updateClock(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM";

    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hoursElem.innerText = hours;
    minutesElem.innerText = minutes;
    secondsElem.innerText = seconds;
    ampmElem.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();