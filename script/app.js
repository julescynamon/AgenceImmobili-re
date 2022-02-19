// ------ Les boutons du slider --------------

const itemsSlide = document.querySelectorAll('.container-slides img');
const nbSlide = itemsSlide.length;
const right = document.querySelector('.right');
const left = document.querySelector('.left');
let count = 0;

right.addEventListener('click', slideRight);

function slideRight() {

    itemsSlide[count].classList.remove('active');

    if (count < nbSlide - 1) {
        
        count++;

    } else {

        count = 0;

    }

    itemsSlide[count].classList.add('active');

};

left.addEventListener('click', slideLeft);

function slideLeft() {

    itemsSlide[count].classList.remove('active');

    if (count > 0) {

        count--;

    } else {

        count = nbSlide - 1;

    }

    itemsSlide[count].classList.add('active');

};