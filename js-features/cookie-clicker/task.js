
let numberOfClicks = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
cookie.onclick = function() {
    let quantityOfClicks = +numberOfClicks.textContent
    numberOfClicks.textContent = (quantityOfClicks + 1).toString();
    if (quantityOfClicks%2 === 0) {
        cookie.setAttribute('width','250')
    }
    else cookie.setAttribute('width','200')
}



