// doces ----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Aguarda o evento DOMContentLoaded, que indica que o documento HTML foi completamente carregado
  fetch("/assets/json/doces.json")
    // Faz uma requisição HTTP para obter o arquivo JSON '/assets/JSON/doces.json'
    .then((res) => res.json())
    // Converte a resposta em formato JSON em um objeto JavaScript
    .then((data) => {
      // Acessa os dados retornados da requisição
      const grid = document.querySelector(".grid");
      // Seleciona o elemento do documento com a classe 'grid' e armazena na variável 'grid'
      data.items.forEach((item) => {
        // Itera sobre cada item no array 'data.items'
        const gridItem = document.createElement("div");
        // Cria um novo elemento 'div' e armazena na variável 'gridItem'
        gridItem.classList.add("grid-item");
        // Adiciona a classe 'grid-item' ao elemento 'gridItem'
        gridItem.innerHTML = `
        <a href="${item.link}" target="_blank">
        <img src="${item.image}" alt="${item.title}" class="item-image">
        <h3 class="item-title">${item.title}</h3>
        </a>
        `;
        // Define o conteúdo HTML do elemento 'gridItem' com base nos dados do item atual
        grid.appendChild(gridItem);
        // Adiciona o elemento 'gridItem' como um filho do elemento 'grid'
      });
    });
});
