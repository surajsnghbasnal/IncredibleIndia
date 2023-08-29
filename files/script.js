var menu = document.querySelector("#menu")
var close = document.querySelector("#cross")
var Nav = document.querySelector(".phnViewNav")
var previous = document.querySelector("#pre")
var next = document.querySelector("#nxt")
var slide = document.querySelector(".slide")
var x = 0
menu.addEventListener("click", function () {
    Nav.style.left = "0"
})
close.addEventListener("click", function () {
    Nav.style.left = "-320px"
})

// let currentPosition
previous.addEventListener("click", function () {
    slide.style.left = "457px "
})
next.addEventListener("click", function () {
    slide.style.left = "-457px "
})


const cardSlider = document.querySelector('.card-slider');
const prevButton = document.querySelector('#pre');
const nextButton = document.querySelector('#nxt');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        cardSlider.style.transform = `translateX(-${currentIndex * 450}px)`;
    }
});

nextButton.addEventListener('click', () => {
    const numCards = cardSlider.childElementCount;
    if (currentIndex < numCards - 1) {
        currentIndex++;
        cardSlider.style.transform = `translateX(-${currentIndex * 450}px)`;
    }
});
