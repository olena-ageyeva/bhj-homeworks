let tabHeaders = Array.from(document.getElementsByClassName('tab'));
let tabContent = Array.from(document.getElementsByClassName('tab__contents'))
let activeIndex = tabContent.findIndex(item => item.classList.contains('tab__content_active'))
for(let i; i<tabHeaders.length; i++) {
let clickOnItem = function() {
    tabHeaders[activeIndex].classList.remove('tab_active');
    tabContent[activeIndex].classList.remove('tab__content_active');
    tabHeaders[i].classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
}
tabHeaders[i].addEventListener('click', clickOnItem)
}