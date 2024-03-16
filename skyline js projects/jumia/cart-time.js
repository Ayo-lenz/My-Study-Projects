let deadline = new Date(
  "dec 25, 2023 23:59:59"
).getTime();

let x = setInterval(function () {

  // Getting current date and time in required format
  let now = new Date().getTime();

  // Calculating difference
  let t = deadline - now;

  // Getting values of days,hours,minutes, seconds
  let days = Math.floor(
      t / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor(
      (t % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
  );
  let minutes = Math.floor(
      (t % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds = Math.floor(
      (t % (1000 * 60)) / 1000
  );

document.querySelector('.day').innerHTML = days;
document.querySelector('.hour').innerHTML = hours;
document.querySelector('.minute').innerHTML = minutes;
document.querySelector('.seconds').innerHTML = seconds;
})

/*
if (diff < 0) {
  clearInterval(x);
  document.querySelector('.end').innerHTML = 'HERE WE GO!';
  document.querySelector('.day').innerHTML = '0';
  document.querySelector('.hour').innerHTML = '0';
  document.querySelector('.minute').innerHTML = '0';
  document.querySelector('.seconds').innerHTML = '0';  
}*/

const menu = document.querySelector('#mobile-menu');
const menuBar = document.querySelector('.side-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuBar.classList.toggle('active');
})