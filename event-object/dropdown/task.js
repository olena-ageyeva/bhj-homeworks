let openingButton = document.getElementsByClassName('dropdown__value')[0];
let dropdownList = document.getElementsByClassName('dropdown__list')[0]
let openList = function() {
    dropdownList.classList.add('dropdown__list_active')
};
openingButton.addEventListener('click', openList);

let listItems = Array.from(document.getElementsByClassName('dropdown__link'));
for (let item of listItems) {
    item.addEventListener('click', (event)=> {
        openingButton.textContent = item.textContent
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault()
    })
}

