// Logica .json para receitas ------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".grid");
  const tipoComida = grid.dataset.tipoComida;
  fetch("../assets/json/" + tipoComida + ".json")
    .then((res) => res.json())
    .then((data) => {
      data.items.forEach((item) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.innerHTML = `
              <a href="${item.link}" target="_blank">
              <img src="${item.image}" alt="${item.title}" class="item-image">
              <h3 class="item-title">${item.title}</h3>
              </a>
              `;
        grid.appendChild(gridItem);
      });
    });
});

// scroll-----------------------------------------------------------------------------------------------

const scrollAnima = document.querySelector('[data-anima="scroll"]');
const scrolAnimaValue = Number.parseFloat(
  scrollAnima.dataset.animaValue || 2.5
);
const metadewindow = window.innerHeight * scrolAnimaValue;
// Calcula a altura da janela do navegador multiplicando a altura interna da janela pelo valor 2.6 e armazena em 'metadewindow'
console.log(metadewindow);
// Exibe o valor de 'metadewindow' no console
function animaScroll() {
  // Declara uma função chamada 'animaScroll'
  const topoItem = scrollAnima.getBoundingClientRect().top;
  // Obtém a posição do elemento 'scrollAnima' em relação à janela do navegador e armazena na variável 'topoItem'
  const ItemVisivel = topoItem - metadewindow < 0;
  // Verifica se o elemento está visível na tela comparando a posição do topo do elemento com 'metadewindow'
  if (ItemVisivel) {
    // Se o elemento estiver visível
    scrollAnima.classList.add("show-button");
    // Adiciona a classe 'show-button' ao elemento 'scrollAnima'
  } else {
    // Caso contrário (elemento não está visível)
    scrollAnima.classList.remove("show-button");
    // Remove a classe 'show-button' do elemento 'scrollAnima'
  }
}
window.addEventListener("scroll", animaScroll);
// Adiciona um ouvinte de evento de rolagem à janela do navegador que chama a função 'animaScroll' quando ocorre um evento de rolagem
