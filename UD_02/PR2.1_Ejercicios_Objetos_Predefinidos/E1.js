function convertirCadena() {
    
  // Cazamos el valor introducido.
  let cadenaTexto = document.getElementById("inputCadena").value;

  /* Invertir la cadena (NO ES NECESARIO EL ARRAY con funciones de String es mas eficiente)
     let cadenaInversa = cadenaTexto.split('').reverse().join('');  */

  // con Array sería
  let cadenaInversa = ""; // Inicializar cadena inversa vacía
  let arrayCaracteres = []; // Array para almacenar los caracteres de la cadena

  //Paso 1: Convertir la cadena en un array de caracteres
  for (let i = 0; i < cadenaTexto.length; i++) {
    arrayCaracteres.push(cadenaTexto[i]);
  }

  //Paso 2: Recorrer el array de caracteres en orden inverso
  for (let i = arrayCaracteres.length - 1; i >= 0; i--) {
    cadenaInversa += arrayCaracteres[i]; // Añadir cada carácter en orden inverso
  }

  // Convertir la cadena a mayúsculas
  let cadenaMayusculas = cadenaTexto.toUpperCase();

  // Repetir la cadena tres veces
  let cadenaRepetidaX3 = cadenaTexto.repeat(3);

  // Invertir la cadena y convertirla a mayúsculas
  let cadenaInversaMayusculas = cadenaInversa.toUpperCase();

  // Devolvemos los resultados en los campos del formulario.
  document.getElementById("inversa").value = cadenaInversa;
  document.getElementById("mayusculas").value = cadenaMayusculas;
  document.getElementById("repetida").value = cadenaRepetidaX3;
  document.getElementById("inversaMayusculas").value = cadenaInversaMayusculas;
}
