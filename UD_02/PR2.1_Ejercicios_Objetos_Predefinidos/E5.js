function buscarMayor() {
  // Obtener los valores de los 9 campos de texto
  let n1 = parseInt(document.getElementById("n1").value) || 0;
  let n2 = parseInt(document.getElementById("n2").value) || 0;
  let n3 = parseInt(document.getElementById("n3").value) || 0;
  let n4 = parseInt(document.getElementById("n4").value) || 0;
  let n5 = parseInt(document.getElementById("n5").value) || 0;
  let n6 = parseInt(document.getElementById("n6").value) || 0;
  let n7 = parseInt(document.getElementById("n7").value) || 0;
  let n8 = parseInt(document.getElementById("n8").value) || 0;
  let n9 = parseInt(document.getElementById("n9").value) || 0;

  // Crear un array con los valores
  let numeros = [n1, n2, n3, n4, n5, n6, n7, n8, n9];

  // Encontrar el número mayor
  let numeroMayor = Math.max(...numeros);

  // Mostrar un mensaje emergente con el número mayor
  alert("El mayor número es " + numeroMayor);
}
