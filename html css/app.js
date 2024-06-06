const menu = document.querySelector("#mobile-menu");
const menuBar = document.querySelector(".navbar-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuBar.classList.toggle("active");
});
