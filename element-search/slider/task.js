let arrOfSlides = Array.from(document.getElementsByClassName('slider__item'));
console.log (arrOfSlides);
let nextSlideButton = document.getElementsByClassName('slider__arrow_next')[0];
let prevSlideButton = document.getElementsByClassName('slider__arrow_prev')[0];
let activeSlide = document.getElementsByClassName('slider__item_active')[0];
let nextSlide = activeSlide.querySelector('.slider__item');
let prevSlide = activeSlide.closest('.slider__item');
nextSlideButton.onclick = function () {
    activeSlide.classList.remove('slider__item_active');
    if(nextSlide === true) {
        nextSlide.classList.add('slider__item_active')
    }
    else arrOfSlides[0].classList.add('slider__item_active')
};

prevSlideButton.onclick = function () {
    activeSlide.classList.remove('slider__item_active');
    if(prevSlide === true) {
        prevSlide.classList.add('slider__item_active')
    }
    else arrOfSlides[arrOfSlides.length-1].classList.add('slider__item_active')
}

/*for (let i=0; i<(arrOfSlides.length); i++) {
    nextSlideButton.onclick = function() {
        if (i=arrOfSlides.length-1) {
            arrOfSlides[i].classList.remove('slider__item_active');
            arrOfSlides[0].classList.add('slider__item_active');
        }
        else arrOfSlides[i].classList.remove('slider__item_active');
        arrOfSlides[i+1].classList.add('slider__item_active');
    };
    prevSlideButton.onclick = function () {
        if (i=0) {
        arrOfSlides[0].classList.remove('slider__item_active');
        arrOfSlides[arrOfSlides.length-1].classList.add('slider__item_active');
    }
        else arrOfSlides[i].classList.remove('slider__item_active');
        arrOfSlides[i-1].classList.add('slider__item_active');
    };
} */