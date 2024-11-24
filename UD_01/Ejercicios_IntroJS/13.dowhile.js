var str = "Bienvenidos al curso 2024-2025";
var cad = "";
var i = 0;
var res = "";

do {
    res = str.charAt(i);
    cad += res;
    i++;
} while (res != 'B')
    
console.log(cad);