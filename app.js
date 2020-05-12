//COVID GUIDLINESS AND GREETINGS CAROUSEL SLIDER
const covidcarouselInner = document.querySelector('.carousel-item');
const covidcarouselImage = document.querySelectorAll('.carousel-item img');

//BUTTONS
const covidprevBtn = document.querySelector('#covid-prevBtn');
const covidnextBtn = document.querySelector('#covid-nextBtn');
//COUNTER
let counter = 1;
const size = covidcarouselImage[0].clientWidth;



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


