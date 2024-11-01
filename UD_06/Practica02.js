// Función para contar la frecuencia de cada palabra
function contarPalabras(palabras) {
  const recuentoPalabras = new Map();
  palabras.forEach(palabra => {
    //asigna el valor acumulado ó Cero si la palabra no existe todavía y le suma 1 por la inserción de la iteración actual.
    recuentoPalabras.set(palabra, (recuentoPalabras.get(palabra) || 0) + 1);
  });
  return recuentoPalabras; //devuelve el Map con el recuento final.
}

// Función para mostrar el resultado
function mostrarResultado(recuentoPalabras) {
  const resultado = document.getElementById('resultado2'); //Capturamos objeto de salida.
  resultado.innerHTML = ''; // Limpiamos el resultado anterior
  // Formamos el resultado con un bucle que añade hijos
  recuentoPalabras.forEach((valor, clave) => {
    const p = document.createElement('p');
    p.textContent = `${clave}: ${valor} veces`;
    resultado.appendChild(p);
  });
}

// FLUJO DE LA APLICACION:  Llamamos a las funciones
const palabrasIntroducidas = pedirPalabras();
const recuento = contarPalabras(palabrasIntroducidas);
mostrarResultado(recuento);
