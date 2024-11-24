// Cambiamos el color del fondo según parametro del boton
function cambiarColor(color) {
  switch (color) {
    case "rojo":
      document.body.style.backgroundColor = "#ff0000";
      break;

    case "verde":
      document.body.style.backgroundColor = "#00ff00";
      break;

    case "azul":
      document.body.style.backgroundColor = "#0000ff";
      break;
  }
}
