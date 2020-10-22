let arrOfLinks = Array.from(document.querySelectorAll('a.menu__link'));
for (let i=0; i<arrOfLinks.length; i++) {
    if(arrOfLinks[i].closest('.menu_sub') === false
        && arrOfLinks[i].querySelector('.menu_sub') === true) {
        arrOfLinks[i].onclick = function () {
            arrOfLinks[i].classList.add('menu_active');
            return false
        }
    }
}