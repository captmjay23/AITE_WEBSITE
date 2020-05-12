//COVID GUIDLINESS AND GREETINGS CAROUSEL SLIDER
const greetcarouselSlider = document.querySelector('.greet-slider');
const greetcarouselImage = document.querySelectorAll('.greet-slider img');
const covidcarouselInner = document.querySelector('.carousel-item');
const covidcarouselImage = document.querySelectorAll('.carousel-item img');

//BUTTONS
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const covidprevBtn = document.querySelector('#covid-prevBtn');
const covidnextBtn = document.querySelector('#covid-nextBtn');
//COUNTER
let counter = 1;
const size = greetcarouselImage[0].clientWidth;

greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';

// BUTTON LISTENERS FOR GREETINGS
nextBtn.addEventListener('click', ()=>{

  if(counter >= greetcarouselImage.length -1) return;
  greetcarouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';
});

prevBtn.addEventListener('click', ()=>{

  if (counter <= 0) return;
  greetcarouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';
});

greetcarouselSlider.addEventListener('transitionend', ()=>{
  if (greetcarouselImage[counter].id === 'last-img') {
    greetcarouselSlider.style.transition = 'none';
    counter = greetcarouselImage.length - 2;
    greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
  if (greetcarouselImage[counter].id === 'first-img') {
    greetcarouselSlider.style.transition = 'none';
    counter = greetcarouselImage.length - counter;
    greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
});
//BUTTON LISTENER FOR COVID GUIDELINESS 
covidnextBtn.addEventListener('click', ()=>{
  if(counter >= covidcarouselImage.length -1) return;
  covidcarouselInner.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  covidcarouselInner.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

covidprevBtn.addEventListener('click', ()=>{
  if(counter <= 0) return;
  covidcarouselInner.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  covidcarouselInner.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

covidcarouselInner.addEventListener('transitionend', ()=>{
  if (covidcarouselImage[counter].id === 'covid-last-img') {
    covidcarouselInner.style.transition = 'none';
    counter = covidcarouselImage.length - 2;
    covidcarouselInner.style.transform = 'translateX(' + (-size * counter) + 'px)';  
  }
  if(covidcarouselImage[counter].id === 'covid-first-img') {
    covidcarouselInner.style.transition = 'none';
    counter = covidcarouselImage.length - counter;
    covidcarouselInner.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});


