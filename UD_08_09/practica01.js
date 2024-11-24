// Seleccionar el contenedor principal
const imagenBody = document.getElementById("imagen");

// Función para cambiar el fondo a una imagen local
function cambiarFondoLocal() {
  imagenBody.style.backgroundImage = "url('./img/Practica01Fondo.jpg')";
}

// Función para restaurar el fondo negro
function restaurarFondoNegro() {
  imagenBody.style.backgroundImage = "none";
  imagenBody.style.backgroundColor = "black";
}

// Escuchar la combinación de teclas ALT + ↓
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.code === "ArrowDown") {
    cambiarFondoLocal();
  }
});

// Detectar cuando se suelta cualquier tecla
document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowDown" || event.altKey) {
    restaurarFondoNegro();
  }
});
