const timeCounter = function () {
    const timer = document.getElementById("timer");
    const time = +timer.textContent;
    if (time === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(counterInterval)
    }
    else timer.textContent = (time - 1).toString();
};

counterInterval = setInterval(timeCounter, 1000)


