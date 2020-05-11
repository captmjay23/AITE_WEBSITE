const greetcarouselSlider = document.querySelector('.greet-slider');
const greetcarouselImage = document.querySelectorAll('.greet-slider img');

//BUTTONS
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//COUNTER
let counter = 1;
const size = greetcarouselImage[0].clientWidth;

greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';

// BUTTON LISTENERS MEAN WHEN YOU CLICK THE BUTTON AND THE ACTION HAPPEN
nextBtn.addEventListener('click', ()=>{
  if(counter >= greetcarouselImage.length -1) return;
  greetcarouselSlider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';

});

prevBtn.addEventListener('click', ()=>{
  if (counter <= 0) return;
  greetcarouselSlider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px)';
});

greetcarouselSlider.addEventListener('transitionend', ()=>{
  if (greetcarouselImage[counter].id === 'last-img') {
    greetcarouselSlider.style.transition = 'none';
    counter = greetcarouselImage.length - 2;
    greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px';
  }
  if (greetcarouselImage[counter].id === 'first-img') {
    greetcarouselSlider.style.transition = 'none';
    counter = greetcarouselImage.length - counter;
    greetcarouselSlider.style.transform = 'translateX(' + (-size * counter) +'px';
  }
})

