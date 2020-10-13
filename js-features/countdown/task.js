const timeCounter = function () {
    let timer = +document.getElementById("timer");
    if (timer.textContent === 0) {
        alert("Вы победили в конкурсе!")
    }
    else timer.innerHTML -= 1;
};

setInterval(timeCounter, 1000)


