const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParent = document.querySelector('.controls ul');

let sectionIndex = 0;
// intervalStop;

const control = document.querySelectorAll('.controls li');

/*const slideAuto = () => {
  intervalStop = setInterval(() => setIndex(+sectionIndex),
  2000)
};

slideAuto();
*/

const setIndex = () => {
  document.querySelector('.controls .selected').classList.remove('selected');

    // this line helps us store and style our picture container inside the variable sectionIndex
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    
}
// looped through the control and add eventlistner
control.forEach((indicator, ind) => {
  indicator.addEventListener('click', () =>{
    // this line told the loop of work in the sectionIndex variable where our pictures is stored then the variable is saved in the ind parameter to enable its functionaliyu in the loop
    sectionIndex = ind;
    setIndex();
    indicator.classList.add('selected');
    slideAuto();
  })
})


rightArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
  // this code below saves the variable sectionIndex containing our image container and the indicators in an array
  indicatorParent.children[sectionIndex].classList.add('selected'); 
  setIndex();
});

leftArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  indicatorParent.children[sectionIndex].classList.add('selected');
  setIndex();
});

