// Solicita la inicial del color elegido
var colorElegido = window.prompt("Introduce un color: R=rojo   V=verde   A=Azul");

// Asignamos el código hexadecimal al color elegido.
colorElegido=colorElegido.toLocaleLowerCase();

// Cambiamos el color del fondo según selección
switch (colorElegido) {

  case "r":
    document.body.style.backgroundColor="#ff0000";
    break;

  case "v":
  document.body.style.backgroundColor="#00ff00";
  break;

  case "a":
  document.body.style.backgroundColor="#0000ff";
  break;

  default:
    alert("El color elegido no es posible, vuelva a seleccionarlo");
    // Recargamos la página HTML para volver a seleccionar  
    location.reload();
}


