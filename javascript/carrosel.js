// Carousel ---------------------------------------------------------------------------------------

// Seleciona o elemento do carrossel
const carousel = document.querySelector(".carrosel-grid");

// Seleciona os botões de navegação
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

// Variável para controlar a posição atual do carrossel
let currentPosition = 0;

// Valor de deslocamento dos itens (ajustável)
const scrollAmount = 141.5;

// Função para mover o carrossel para a esquerda ou direita
function moveCarousel(direction) {
  // Calcula a posição máxima do carrossel
  const maxPosition = carousel.scrollWidth - carousel.offsetWidth;

  // Verifica a direção e atualiza a posição atual
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

  // Realiza o deslocamento suave do carrossel para a nova posição
  carousel.scrollTo({
    left: currentPosition,
    behavior: "smooth",
  });
}

// Adiciona os ouvintes de evento para os botões de navegação
leftButton.addEventListener("click", () => moveCarousel("left"));
rightButton.addEventListener("click", () => moveCarousel("right"));

// Função para atualizar a visibilidade dos botões de navegação
function updateButtonVisibility() {
  // Calcula a posição máxima do carrossel
  const maxPosition = carousel.scrollWidth - carousel.offsetWidth;

  // Verifica a posição atual e atualiza a visibilidade dos botões
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
// Adiciona os ouvintes de evento para os botões de navegação (incluindo a atualização da visibilidade)
leftButton.addEventListener("click", () => {
  moveCarousel("left");
  updateButtonVisibility();
});
rightButton.addEventListener("click", () => {
  moveCarousel("right");
  updateButtonVisibility();
});
// Adiciona um ouvinte de evento para o redimensionamento da janela (atualização da visibilidade)
window.addEventListener("resize", () => {
  updateButtonVisibility();
});
// Chama a função para atualizar a visibilidade inicialmente
updateButtonVisibility();

// Carousel-2 ---------------------------------------------------------------------------------------

const carousel_2 = document.querySelector(".carrosel-grid-2");
const leftButton_2 = document.getElementById("left-2");
const rightButton_2 = document.getElementById("right-2");
let currentPosition_2 = 0;
let scrollAmount_2 = 283; // Valor padrão para telas maiores

function moveCarousel_2(direction_2) {
  const maxPosition_2 = carousel_2.scrollWidth - carousel_2.offsetWidth;

  if (direction_2 === "left-2") {
    currentPosition_2 -= scrollAmount_2;
    if (currentPosition_2 < 0) {
      currentPosition_2 = 0;
    }
  } else {
    currentPosition_2 += scrollAmount_2;
    if (currentPosition_2 > maxPosition_2) {
      currentPosition_2 = maxPosition_2;
    }
  }

  carousel_2.scrollTo({
    left: currentPosition_2,
    behavior: "smooth",
  });
}

leftButton_2.addEventListener("click", () => moveCarousel_2("left-2"));
rightButton_2.addEventListener("click", () => moveCarousel_2("right-2"));

function updateButtonVisibility_2() {
  const maxPosition_2 = carousel_2.scrollWidth - carousel_2.offsetWidth;

  if (currentPosition_2 === 0) {
    leftButton_2.style.display = "none";
  } else {
    leftButton_2.style.display = "block";
  }

  if (currentPosition_2 === maxPosition_2) {
    rightButton_2.style.display = "none";
  } else {
    rightButton_2.style.display = "block";
  }
}

leftButton_2.addEventListener("click", () => {
  moveCarousel_2("left-2");
  updateButtonVisibility_2();
});
rightButton_2.addEventListener("click", () => {
  moveCarousel_2("right-2");
  updateButtonVisibility_2();
});

function adjustScrollAmount_2() {
  if (window.innerWidth <= 320) {
    // Para telas menores, ajuste o scrollAmount_2
    scrollAmount_2 = 125.7;
  } else if (window.innerWidth <= 375) {
    // Para telas menores, ajuste o scrollAmount_2
    scrollAmount_2 = 153.5;
  } else if (window.innerWidth <= 425) {
    // Para telas menores, ajuste o scrollAmount_2
    scrollAmount_2 = 178.7;
  } else if (window.innerWidth <= 768) {
    // Para telas menores, ajuste o scrollAmount_2
    scrollAmount_2 = 176.8;
  } else if (window.innerWidth <= 1024) {
    // Para telas menores, ajuste o scrollAmount_2
    scrollAmount_2 = 239;
  } else {
    // Para telas maiores, use o valor padrão
    scrollAmount_2 = 283;
  }
}

window.addEventListener("resize", () => {
  adjustScrollAmount_2();
  updateButtonVisibility_2();
});

adjustScrollAmount_2();
updateButtonVisibility_2();

/* Slideshow Home-----------------------------------------------------------*/
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},3000)


function nextImage(){
    count++;
    if(count>7){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
/*---------------------------------------------------------------------------*/