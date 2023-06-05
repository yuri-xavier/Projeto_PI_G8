const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  comparePassword();
  passwordValidate();
  emailValidate2();
  passwordValidate2();
});

// Função para verificar e aplicar a cor correta ao input
function setError(index) {
  campos[index].style.border = "3px solid #c63636";
  spans[index].style.display = "block";
}
function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

// Validação do campo Nome
function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

// Validação do campo Email
function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}
function emailValidate2() {
  if (!emailRegex.test(campos[0].value)) {
    setError(0);
  } else {
    removeError(0);
  }
}
// Validação do campo Senha
function passwordValidate() {
  if (campos[2].value.length < 8) {
    setError(2);
  } else {
    removeError(2);
    comparePassword();
  }
}

function comparePassword() {
  if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
    removeError(3);
  } else {
    setError(3);
  }
}

function passwordValidate2() {
  if (campos[1].value.length < 8) {
    setError(1);
  } else {
    removeError(1);
  }
}
