var coche = {id: 1235, marca : "Audi", color : "azul", matricula : "2356ABC"};
console.log(coche.matricula);


var coche = {
    id: 1235,
    marca: "Audi",
    color: "azul",
    matricula : "2356ABC",
    obtener_matricula: function(){
        return this.matricula;
    }
};
console.log(coche.obtener_matricula()); //2356ABC