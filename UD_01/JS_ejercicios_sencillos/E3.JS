// Solicita el nombre del usuario
var cadenaTexto = window.prompt("Introduce una cadena de texto");

// Cálculo de letras "a"
cadenaTexto=cadenaTexto.toLocaleLowerCase();
var contadorA = 0;

for (let i=0; i<cadenaTexto.length; i++){
  if (cadenaTexto[i]=='a'){
    contadorA++;
  }
}

// Muestra una pantalla de alerta con el resulado del recuento
window.alert("La expresión contiene " + contadorA + " letras 'a'.");
