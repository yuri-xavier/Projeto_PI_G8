document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".grid");
  const tipoComida = grid.dataset.tipoComida;
  fetch("./assets/json/" + tipoComida + ".json")
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

// MENU -------------------------------------------------------------------------------------------------

const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
  document.body.classList.toggle("scroll-lock");
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// scroll-----------------------------------------------------------------------------------------------

const scrollAnima = document.querySelector('[data-anima="scroll"]');
const scrolAnimaValue = Number.parseFloat(
  scrollAnima.dataset.animaValue || 2.6
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

//Dark-mode -----------------------------------------------------------------------------------------------

window.addEventListener("scroll", animaScroll);
// Adiciona um ouvinte de evento de rolagem à janela do navegador que chama a função 'animaScroll' quando ocorre um evento de rolagem

// Dark or light mode
const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
//load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}
loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // save or remove dark mode
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

// Barra-pesquisa ---------------------------------------------------------------------------------------

$(document).ready(function () {
  // Quando o documento estiver completamente carregado
  $.getJSON("../assets/json/data.json", function (data) {
    // Faz uma requisição GET para o arquivo JSON e obtém os dados
    var items = data.items;
    // Armazena os itens do JSON na variável 'items'
    $("#pesquisa").autocomplete({
      // Aplica a função de autocomplete ao elemento com o ID 'pesquisa'
      source: items.map(function (item) {
        return item.title;
      }),
      // Define a fonte de sugestões para o autocomplete como os títulos dos itens
      select: function (event, ui) {
        var selectedItem = items.find(function (item) {
          return item.title === ui.item.value;
        });
        // Quando um item é selecionado no autocomplete, encontra o item correspondente

        // Abre o link do item selecionado em uma nova janela do navegador
        window.open(selectedItem.link);
      },
    });
  });
});
