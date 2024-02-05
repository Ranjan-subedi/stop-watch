
let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.querySelector(".timer");
let int = null;

document.getElementById("start").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displaytimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay();
});

function displaytimer() {
    miliseconds += 10;
    if (miliseconds === 1000) {
        miliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliseconds < 10 ?
        "00" + miliseconds :
        miliseconds < 100 ?
        "0" + miliseconds :
        miliseconds;

    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
