function validarFecha() {
  const fechaIntroducida = document.getElementById("fecha").value;


  // Expresión regular para validar fechas DD/MM/YYYY, D/M/YY, D/M/YYYY 
  const regexFecha = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{2}|\d{4})$/;

  if (regexFecha.test(fechaIntroducida)) {
      alert("Gracias por introducir la fecha");
    } else {
    alert("El formato de la fecha NO es correcto");
  }
  // Recarga la página para volver a empezar
  location.reload();
}
