// Captura de los elementos del DOM a lutilizar
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const enviarBtn = document.getElementById("enviar");

// Funciones para validar los campos con expresiones regulares
function validarEmail(email) {
  const emailRegExpresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegExpresion.test(email);
}

function validarPassword(password) {
  return password.length >= 8 && password.length <= 10;
}

// Actualizar los mensajes de error con los valores introducidos
function actualizarErrores() {
  if (!validarEmail(emailInput.value)) {
    emailError.textContent =
      "Formato de email incorrecto (ejemplo: xxxx@yyyy.zzzz).";
  } else {
    emailError.textContent = "";
  }

  if (!validarPassword(passwordInput.value)) {
    passwordError.textContent =
      "La contraseña debe tener entre 8 y 10 caracteres.";
  } else {
    passwordError.textContent = "";
  }
}

// Actulizar el estado del botón de envío
function actualizarEstadoBoton() {
  if (validarEmail(emailInput.value) && validarPassword(passwordInput.value)) {
    enviarBtn.disabled = false;
    enviarBtn.style.backgroundColor = "green";
  } else {
    enviarBtn.disabled = true;
  }
}

// Validación en TIEMPO REAL de los valores introdcidos.
emailInput.addEventListener("input", () => {
  actualizarErrores();
  actualizarEstadoBoton();
});

passwordInput.addEventListener("input", () => {
  actualizarErrores();
  actualizarEstadoBoton();
});

// Prevenir el envío sin las validaciones OK
document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!enviarBtn.disabled) {
    alert("Formulario enviado correctamente.");
    location.reload();
  }
});
