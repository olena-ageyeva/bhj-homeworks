const timeCounter = function () {
    let timer = +document.getElementById("timer").textContent;
    if (timer === 0) {
        alert("Вы победили в конкурсе!")
    }
    else timer -= 1;
};

setInterval(timeCounter, 1000)


