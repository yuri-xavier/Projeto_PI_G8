data ----------------------------------------------------------------------------------------------

<<<<<<< HEAD:assets/javascript/data.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/assets/JSON/massas.json")
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
=======
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("../assets/json/massas.json")
//     .then((res) => res.json())
//     .then((data) => {
//       const grid = document.querySelector(".grid");
//       data.items.forEach((item) => {
//         const gridItem = document.createElement("div");
//         gridItem.classList.add("grid-item");
//         gridItem.innerHTML = `
//         <a href="${item.link}" target="_blank">
//         <img src="${item.image}" alt="${item.title}" class="item-image">
//         <h3 class="item-title">${item.title}</h3>
//         </a>
//         `;
//         grid.appendChild(gridItem);
//       });
//     });
// });
>>>>>>> ab7a520f4f51b3775e07c50b3aadb98e6e9ee7de:javascript/data.js
