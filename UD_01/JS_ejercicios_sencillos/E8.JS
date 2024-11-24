function calculoMayor(){

  
    // Capturamos los valores de los campos intruducidos.
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    
    // Verificar que los valores no estén vacíos y sean numéricos en caso contrario finaliza la ejecución de la función.
    if (num1 === "" || isNaN(num1) || num2 === "" || isNaN(num2) || num3 === "" || isNaN(num3)) {
        alert(" Introduzca SOLO valores numéricos en todos los campos.");
        return;
    }

    // Convertirmos los valores a números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    // Selecionamos número mayor
    var mayor = Math.max(num1, num2, num3);

    // Mostramos el mayor número en una ventana emergente
    alert("El mayor número es el " + mayor);
}









  // // Obtener los parámetros de la URL
// const parametrosURL = new URLSearchParams(window.location.search);
// // Volvemos a pasar a formato número cada dato recuperado de la URL que se envían como string.
// const num1 = parseFloat(parametrosURL.get('num1'));
// const num2 = parseFloat(parametrosURL.get('num2'));
// const num3 = parseFloat(parametrosURL.get('num3'));


// console.log(num1, num2, num3);

// // Validación de los datos




// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     alert('Introduce solo números en todos los campos.');
// } else if ((num1==num2) && (num2==num3))
//     {alert('Los tres númros son iguales');
// } else {
//     const mayor = Math.max(num1, num2, num3);
//     alert(`El número mayor es: ${mayor}`);
// }
// window.location.href = "E8.html";
// parametrosURL.delete(num1,num2,num3);
// location.reload();

// }
