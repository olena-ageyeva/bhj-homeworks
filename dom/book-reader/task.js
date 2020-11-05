let fontSizeButtons = Array.from(document.getElementsByClassName('font-size'));
let bookFontSize = document.getElementsByClassName('book')[0]
for (let button of fontSizeButtons) {
    let activeButton = fontSizeButtons.findIndex(index=>index.classList.contains('font-size_active'))
    button.addEventListener('click', (event)=> {
        fontSizeButtons[activeButton].classList.remove('font-size_active');
        this.classList.add('font-size_active');
        if (this.classList.contains('font-size_small')) {
            bookFontSize.classList.remove('book_fs-big');
            bookFontSize.classList.add('book_fs-small')
        }
        if (this.classList.contains('font-size_big')) {
            bookFontSize.classList.remove('book_fs-small');
            bookFontSize.classList.add('book_fs-big')
        }
        else {
            bookFontSize.classList.remove('book_fs-small');
            bookFontSize.classList.remove('book_fs-big')
        }
        event.preventDefault()
    })
}

