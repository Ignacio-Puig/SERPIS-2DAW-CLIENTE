function mostrarFecha(){
  
  //Arrays para seleccionar dia de la semana y mes en el formato letra
  const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  
  // Creamos fecha y la descomponemos en elementos
  const hoy = new Date();
  const diaSemana = diasSemana[hoy.getDay()];
  const dia = hoy.getDate();
  const mes = meses[hoy.getMonth()];
  const año = hoy.getFullYear();

  // Formato: Hoy es día de la semana, día de mes de año
  const mensaje = `Hoy es ${diaSemana}, ${dia} de ${mes} de ${año}`;

  // Mostrar el mensaje en un alert
  alert(mensaje);
}
// Arranque automático de la función al cargar la página.
window.onload = mostrarFecha;