// Pedimos las palabras al usuario LLAMANDO A LA FUNCION DEL main.js
const palabrasIntroducidas = pedirPalabras();

// Función para eliminar duplicados y ordenar alfabéticamente inverso
function procesarPalabras(palabrasIntroducidas) {
  // Creamos un Set para eliminar duplicados y  lo convertimos a un array y lo ordenamos en orden alfabético inverso.
  const palabrasUnicasOrdenadas = [...new Set(palabrasIntroducidas)].sort().reverse();
  return palabrasUnicasOrdenadas;
}
// Procesamos las palabras para eliminar duplicados y ordenar
const palabrasFinales = procesarPalabras(palabrasIntroducidas);

// Mostramos los resultados en el elemento con id 'resultado1'
const resultado1 = document.getElementById('resultado1');
resultado1.textContent = palabrasFinales.join(' - ');