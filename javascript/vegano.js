// vegano ----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  fetch("../assets/json/vegano.json")
    .then((res) => res.json())
    .then((data) => {
      const grid = document.querySelector(".grid");
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
