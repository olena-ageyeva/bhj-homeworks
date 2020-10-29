let openingButton = document.getElementsByClassName('dropdown__value')[0];
let dropdownList = document.getElementsByClassName('dropdown__list')[0]
let openList = function() {
    dropdownList.classList.add('dropdown__list_active')
};
openingButton.addEventListener('click', openList);
console.log(document.getElementsByClassName('dropdown__link')[0].textContent);
let changeValue = function() {
    document.getElementsByClassName('dropdown__list')[0].textContent = item.textContent
    dropdownList.classList.remove('dropdown__list_active');
    return false
};
let listItems = Array.from(document.getElementsByClassName('dropdown__link'));
for (let item of listItems) {
    item.addEventListener('click', changeValue)
}

