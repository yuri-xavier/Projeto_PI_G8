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

//Dark-mode -----------------------------------------------------------------------------------------------
const changeThemeBtn = document.querySelector("#change-theme");
// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  // TESTE mudança da @keyframes p dark mode
  const animationName = document.body.classList.contains("dark") ? "changeBackgroundDark" : "changeBackground";
  document.body.style.animationName = animationName;

}
// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}
loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

// Barra-pesquisa ---------------------------------------------------------------------------------------

$(document).ready(function () {
  // Quando o documento estiver completamente carregado
  $.getJSON(
    "../assets/json/data.json",
    "./assets/json/data.json",
    function (data) {
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
    }
  );
});
