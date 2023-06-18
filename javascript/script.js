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
  const arquivo = document.querySelector(".search-box");
  const tipoArquivo = arquivo.dataset.tipoArquivo || "";
  const isGitHubPage = window.location.pathname !== "/";

  $.getJSON("." + tipoArquivo + "/assets/json/data.json", function (data) {
    var items = data.items;

    $("#pesquisa").autocomplete({
      source: function (request, response) {
        let filteredItems = items
          .filter(function (item) {
            return (
              item.title.toLowerCase().indexOf(request.term.toLowerCase()) !==
              -1
            );
          })
          .slice(0, 5);

        if (isGitHubPage) {
          filteredItems.forEach(function (item) {
            if (!item.link.startsWith("http")) {
              item.link = "../" + item.link;
            }
          });
        }

        response(
          filteredItems.map(function (item) {
            return item.title;
          })
        );
      },
      select: function (event, ui) {
        let selectedItem = items.find(function (item) {
          return item.title === ui.item.value;
        });

        if (isGitHubPage && !selectedItem.link.startsWith("http")) {
          selectedItem.link = "../" + selectedItem.link;
        }

        window.open(selectedItem.link);
      },
    });
  });
});
