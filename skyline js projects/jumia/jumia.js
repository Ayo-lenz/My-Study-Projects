// Acess the html
const carouselRow = document.querySelector('.slides-row');
const carouselSlides = document.getElementsByClassName('slides');
const dots = document.getElementsByClassName('dot');
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');

// declare variables

let index = 0;
var width;

function slideWidth(){
  width = carouselSlides[0].clientWidth;
}
slideWidth();
window.addEventListener('resize', slideWidth);
carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';

// go to next slide

nextBtn.addEventListener('click',  nextSlide = (nextSlide) => {
  if(index >= carouselSlides.length - 1){return};
  carouselRow.style.transition = 'transform 0.4s ease-out';
  index++;
  carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';
  dotsLabel();
});

// go to previous slide

prevBtn.addEventListener('click', prevSlide = (prevSlide) => {
  if(index <= 0){return};
  carouselRow.style.transition = 'transform 0.4s ease-out';
  index--;
  carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';
  dotsLabel();
});

// return to the first slide when it reaches the last one

carouselRow.addEventListener('transitionend', () => {
  if(carouselSlides[index].id==='lastimg'){
    carouselRow.style.transition = 'none';
    index = carouselSlides.length - index;
    carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';
    dotsLabel();
  }

  if(carouselSlides[index].id==='firstimg'){
    carouselRow.style.transition = 'none';
    index = carouselSlides.length - 1;
    carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';
    dotsLabel();
  }
})

// auto sliding

function autoSlide(){
  deleteInterval = setInterval(timer, 5000);
  function timer(){
    nextSlide();
  }
}
autoSlide();

// stop auto sliding when mouse is over

const mainCarousel = document.querySelector('.carousel');
mainCarousel.addEventListener('mouseover', () => {
  clearInterval(deleteInterval);
});

// resume autosliding when mouse is out
mainCarousel.addEventListener('mouseout', autoSlide);

function dotsLabel(){
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '')
    
  }
  dots[index - 0].className += ' active'
}