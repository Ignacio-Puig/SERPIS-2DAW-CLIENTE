function calcularAnyos() {
  // Capturar la fecha de nacimiento de input del html.
  let fechaNacimiento = document.getElementById("fechaIntroducida").value;

  if (!fechaNacimiento) {
    alert("Por favor, selecciona tu fecha de nacimiento.");
    return;
  }

   // Si la fecha es valida ---> Descomponer la fecha de nacimiento y el día de  hoy a Dia, Mes y Año.
  let nacimientoDate = new Date(fechaNacimiento);
  let hoyDate = new Date();

  let mesActual = hoyDate.getMonth();
  let diaActual = hoyDate.getDate();
  let mesNacimiento = nacimientoDate.getMonth();
  let diaNacimiento = nacimientoDate.getDate();

  // Calcular la diferencia en AÑOS teniendo en cuenta si se han cumplido ya o no según el día.
  let edad = 0;
  edad = hoyDate.getFullYear() - nacimientoDate.getFullYear();

  let difMeses = mesActual - mesNacimiento;
  let difDias = diaActual - diaNacimiento;
  
  if (difMeses < 0 || (difMeses == 0 && difDias < 0)) {
    edad--;
  }

  // Mostrar dias en un mensaje alert
  alert(`Han transcurrido ${edad} años, aproximadamente, desde que naciste.`);
  // Rearga la página para volver a empezar.
  location.reload();
}
