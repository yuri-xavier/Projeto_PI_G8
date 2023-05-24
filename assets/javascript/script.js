// MENU -----------------------------------------------------------------------------------------------------

const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

// scroll-----------------------------------------------------------------------------------------------

const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadewindow = window.innerHeight * 2.7;
console.log(metadewindow);
function animaScroll() {
  const topoItem = scrollAnima.getBoundingClientRect().top;

  const ItemVisivel = topoItem - metadewindow < 0;

  if (ItemVisivel) {
    scrollAnima.classList.add("show-button");
  } else {
    scrollAnima.classList.remove("show-button");
  }
}

window.addEventListener("scroll", animaScroll);
