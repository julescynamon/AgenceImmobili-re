// SLider portfolio

const sliderPortfolio = document.querySelector('.slider-portfolio');
const srcEnCourSlider = document.querySelector('.img-visible-slider');
const allPicsPortfolio = Array.from(document.querySelectorAll('.grid-item img'));
const rightPortfolio = document.querySelector('.btn-right');
const leftPortfolio = document.querySelector('.btn-left');
const fermerSlide = document.querySelector('.btn-fermer-slider');

let photoEnCours;
let indexEnCours;

allPicsPortfolio.forEach(item => {

    item.addEventListener('click', (e) =>{

        sliderPortfolio.style.display = 'block';
        srcEnCourSlider.src = e.target.src;
        photoEnCours = e.target;
        indexEnCours = allPicsPortfolio.indexOf(photoEnCours);

    });

});

rightPortfolio.addEventListener('click', () => {

    if (indexEnCours === 11) {
        
        indexEnCours = 0;
        srcEnCourSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        return;

    };

    srcEnCourSlider.src = allPicsPortfolio[indexEnCours + 1].src;
    photoEnCours = allPicsPortfolio[indexEnCours + 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);

});

leftPortfolio.addEventListener('click', () => {

    if (indexEnCours === 0) {

        indexEnCours = 11;
        srcEnCourSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        return;

    };

    srcEnCourSlider.src = allPicsPortfolio[indexEnCours - 1].src;
    photoEnCours = allPicsPortfolio[indexEnCours - 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);

});

fermerSlide.addEventListener('click', () => {

    sliderPortfolio.style.display = 'none';

});