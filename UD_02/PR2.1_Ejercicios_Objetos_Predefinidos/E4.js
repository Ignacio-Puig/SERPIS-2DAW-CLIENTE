function convertirNumeros() {

  // Obtenemos el número "INTRODUCIDO" que queremos convertir
 let numero = document.getElementById("numero");
 numero = parseFloat(numero.value);

//Conversiones
let conversionBinario = numero.toString(2);
let conversionOctal = numero.toString(8);
let conversionHexadecimal = numero.toString(16);

// Pasamos las conversiones a la tabla: cazamos las celdas a cumplimentar, las borramos por si tuvieran algún valor anterior y les asignamos los valores calculados
let numeroBinario = document.getElementById("numeroBinario");
numeroBinario.textContent = '';
numeroBinario.textContent = conversionBinario;

let numeroOctal = document.getElementById("numeroOctal");
numeroOctal.textContent = '';
numeroOctal.textContent = conversionOctal;

let numeroHexadecimal = document.getElementById("numeroHexadecimal");
numeroHexadecimal.innerText = '';
numeroHexadecimal.innerText = conversionHexadecimal;


/*
   // Obtenemos la fila de la tabla a rellenar y la vaciamos.
  let filaPalabra = document.getElementById("filaPalabra");
 filaPalabra.innerText = '';

// Creamos las celdas necesarias para las letras de al palabra y las rellenamos a la vez.
//EN ESTE CASO NO VEO NECESARIO CREAR LAS CELDAS Y LUEGO  ACCEDER A SU CONTENIDO CELDA A CELDA, LA CREAMOS VACIA Y LA FORMAMOS CADA VEZ.
for (let i=0; i<palabra.length; i++){
  let celda = document.createElement("td");
  celda.innerText=palabra[i];
  filaPalabra.appendChild(celda);
}   */

 
}
 