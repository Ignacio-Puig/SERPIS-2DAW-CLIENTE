function insertarLetras() {

  // Obtenermos la palabra "INTRODUCIDA" que queremos insertar en la tabal
 let palabra = document.getElementById("palabra").value.toUpperCase();

 // Obtenemos la fila de la tabla a rellenar y la vaciamos.
  let filaPalabra = document.getElementById("filaPalabra");
 filaPalabra.innerText = '';

// Creamos las celdas necesarias para las letras de al palabra y las rellenamos a la vez.
//EN ESTE CASO NO VEO NECESARIO CREAR LAS CELDAS Y LUEGO  ACCEDER A SU CONTENIDO CELDA A CELDA, LA CREAMOS VACIA Y LA FORMAMOS CADA VEZ.
for (let i=0; i<palabra.length; i++){
  let celda = document.createElement("td");
  celda.innerText=palabra[i];
  filaPalabra.appendChild(celda);
}
 
}
 