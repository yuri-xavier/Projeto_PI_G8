// MENU -------------------------------------------------------------------------------------------------

const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

// scroll-----------------------------------------------------------------------------------------------

const scrollAnima = document.querySelector('[data-anima="scroll"]');
// Seleciona o elemento no documento com o atributo 'data-anima' igual a 'scroll' e armazena na variável 'scrollAnima'
const metadewindow = window.innerHeight * 2.6;
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

// Dark or light mode -----------------------------------------------------------------------------------
const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
//load lught or dark mode
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

// $(document).ready(function () {
//   // Quando o documento estiver completamente carregado
//   $.getJSON("../assets/json/data.json", function (data) {
//     // Faz uma requisição GET para o arquivo JSON e obtém os dados
//     var items = data.items;
//     // Armazena os itens do JSON na variável 'items'
//     $("#pesquisa").autocomplete({
//       // Aplica a função de autocomplete ao elemento com o ID 'pesquisa'
//       source: items.map(function (item) {
//         return item.title;
//       }),
//       // Define a fonte de sugestões para o autocomplete como os títulos dos itens
//       select: function (event, ui) {
//         var selectedItem = items.find(function (item) {
//           return item.title === ui.item.value;
//         });
//         // Quando um item é selecionado no autocomplete, encontra o item correspondente

//         // Abre o link do item selecionado em uma nova janela do navegador
//         window.open(selectedItem.link);
//       },
//     });
//   });
// });

// Carousel ---------------------------------------------------------------------------------------
const carousel = document.querySelector(".carrosel-grid");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let currentPosition = 0;
const scrollAmount = 141.5; // Ajuste o valor para controlar o deslocamento dos itens

function moveCarousel(direction) {
  const maxPosition = carousel.scrollWidth - carousel.offsetWidth;

  if (direction === "left") {
    currentPosition -= scrollAmount;
    if (currentPosition < 0) {
      currentPosition = 0;
    }
  } else {
    currentPosition += scrollAmount;
    if (currentPosition > maxPosition) {
      currentPosition = maxPosition;
    }
  }

  carousel.scrollTo({
    left: currentPosition,
    behavior: "smooth",
  });
}

leftButton.addEventListener("click", () => moveCarousel("left"));
rightButton.addEventListener("click", () => moveCarousel("right"));

function updateButtonVisibility() {
  const maxPosition = carousel.scrollWidth - carousel.offsetWidth;

  if (currentPosition === 0) {
    leftButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
  }

  if (currentPosition === maxPosition) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }
}

leftButton.addEventListener("click", () => {
  moveCarousel("left");
  updateButtonVisibility();
});

rightButton.addEventListener("click", () => {
  moveCarousel("right");
  updateButtonVisibility();
});

window.addEventListener("resize", () => {
  updateButtonVisibility();
});

updateButtonVisibility();
