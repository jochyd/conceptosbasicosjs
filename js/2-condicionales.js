/* Estructura if

if(condicion logica) siempre la resspuesta es un valor booleano 
true or false

if(condicion logica){
    todo el codigo a ejecutar si se cumple la condicion o si la condicion es true

else{
    todo el codigo a ejecutar si cumple la condicion (false)
}


}

*/

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);

// if anidados o condicionales multiples

if (numero1 > numero2) {
  document.write("El primer numero es mayor, numero ingresado " + numero1);
} else {
  if (numero2 > numero1) {
    document.write("El segundo numero es mayor, numero ingresado " + numero2);
  } else {
    document.write(
      "Los numeros ingresados son iguales, numero ingresado " + numero2
    );
  }
}

