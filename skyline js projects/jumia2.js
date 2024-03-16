const carouselRow = document.querySelector('.slides-row');
const carouselSlides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');


var counter = 0;

function switchTest(currentTest){
  currentTest.classList.add('active');
  var testId = currentTest.getAttribute('attr');
  if(testId > counter){
    carouselSlides[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = testId;
    carouselSlides[counter].style.animation = 'next2 0.5s ease-in forwards';
  }
  else if(testId === counter){return;}
  else{
    carouselSlides[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = testId;
    carouselSlides[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
  indicators();
}

function indicators(){
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

function slideNext(){
  carouselSlides[counter].style.animation = 'next1 0.5s ease-in forwards';
  if(counter >= carouselSlides.length - 1){
    counter = 0;
  }
  else{
    counter++;
  }
  carouselSlides[counter].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}
function autoSliding(){
  deleteInterval = setInterval(timer, 2000);
  function timer(){
    slideNext();
    indicators();
  }
}
autoSliding();


// Stop auto sliding when mouse is over the indicators
const container = document.querySelector('.dots');
container.addEventListener('mouseover', pause);
function pause(){
  clearInterval(deleteInterval);
}

// Resume sliding when mouse is out of the indicators
container.addEventListener('mouseout', autoSliding);
