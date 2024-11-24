function calcularDias() {
  // Solicitar la fecha de nacimiento al usuario en formato YYYY/MM/DD mediante PROMPT
  let fechaNacimiento = prompt("¿Qué día naciste? YYYY/MM/DD");

  // Validar que se ha introducido una fecha válida: filtra datos nulos y no númericos
  if (!fechaNacimiento || isNaN(Date.parse(fechaNacimiento))) {
    alert("Por favor, introduce una fecha válida en el formato YYYY/MM/DD.");
    location.reload();
    return;
  }

  // Si la fecha es valida ---> Convertir la fecha de nacimiento a un objeto Date
  let nacimientoDate = new Date(fechaNacimiento);
  let hoyDate = new Date(); // Fecha de hoy

  // Calcular la diferencia en milisegundos y pasarlo a días completos no considerando las fracciones de día
  let diferenciaMilisegundos = hoyDate - nacimientoDate;
  let diasTranscurridos = Math.floor(
    diferenciaMilisegundos / (1000 * 60 * 60 * 24)
  );

  // Mostrar dias en un mensaje alert
  alert(
    `Han transcurrido ${diasTranscurridos} días, aproximadamente, desde que naciste.`
  );
}

// ejecuta la aplicación al cargar la página
window.onload = calcularDias;
