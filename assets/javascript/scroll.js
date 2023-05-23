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
