var mes;
var estacion;

switch (new Date().getMonth()) { 
    case 0:
        mes = "Enero";
        estacion = "Invierno";
        break;
    case 1:
        mes = "Febrero";
        estacion = "Invierno";
        break;
    case 2:
        mes = "Marzo";
        estacion = "Invierno a primavera";
        break;
    case 8:
        mes = "Septiembre";
        estacion = "Otoño";
        break;
    case 11:
        mes = "Diciembre";
        estacion = "Otoño a inverno";
        break;
    default:
        console.log("Pasa por aqui si no entra en ninguno de los casos anteriores");
}
console.log ("Mes: " + mes);
console.log ("Estación: " + estacion);