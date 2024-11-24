function insertarLetras() {
  // La palabra "HOLA" que queremos insertar
  const palabra = "HOLA";

  // Obtener todas las celdas (td) de la tabla
  let celdas = document.querySelectorAll("#tablaHOLA td");

  // Recorrer las celdas e insertar cada letra de la palabra
  for (let i = 0; i < palabra.length; i++) {
    celdas[i].innerText = palabra[i];
  }
}
window.onload = insertarLetras;