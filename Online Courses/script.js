const navbar = document.getElementById("navbar");


window.addEventListener("scroll", () => {
  if (scrollY > 40) {
    navbar.classList.add("navbar");
  } else {
    navbar.classList.remove("navbar");
  }
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const cross = document.getElementById("cross");

hamburger.addEventListener("click", () => {
  menu.style.left = "0";
  cross.classList.remove("hidden");
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  menu.style.left = "105%";
});
