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

//Validação do esqueceu sua senha
let failedAttempts = 0;

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio do formulário

  let email2 = document.getElementById("email").value;
  let password2 = document.getElementById("senha").value;

  if (email2 === "user@example.com" && password2 === "senha123") {
    // Login bem-sucedido, redirecionar o usuário para a página principal, YURIII VER O CAMINHO SE TÁ CORRETO
    removeError(1);
    window.location.href = "../index.html";
  } else {
    // Aumentar o número de tentativas mal sucedidas
    failedAttempts++;

    if (failedAttempts === 2) {
      // Mostrar o link "Esqueceu sua senha?" após DUAS tentativas mal sucedidas
      document
        .getElementById("forgot-password-link")
        .classList.remove("hidden");
    } else {
      // Exibir uma mensagem de erro genérica
      alert("Email ou senha inválidos. Tente novamente.");
    }
  }
});
