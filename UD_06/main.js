// Función COMUN A AMBAS PRACTICAS para pedir palabras al usuario hasta que se cancele o se deje en blanco
function pedirPalabras() {
  console.log("pedirPalabras INICIADO");
  // Inicializamos un arreglo vacío para almacenar las palabras
  const palabras = [];
  
  // Bucle para pedir palabras hasta que el usuario deje en blanco el input
  let palabra;
  do {
    palabra = prompt('Ingrese una palabra (o deje en blanco para finalizar): ');
    // Si la palabra no está vacía, la agregamos al array
    if (palabra) {
      palabras.push(palabra);
    }
  } while (palabra);

  // Retornamos el array de palabras
  return palabras;
}


