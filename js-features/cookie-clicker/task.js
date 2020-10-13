
let numberOfClicks = +document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie")
cookie.onclick = function() {
    numberOfClicks.textContent += 1;
}



