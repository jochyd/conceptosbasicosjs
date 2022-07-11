/*
while (condicion logica) (true o false booleana){
    aqui va todo el codigo que quiero ejecutar varias veces
    Cambiar la condicion logica 
}

*/
// let cantidadMates = 1;
// while (cantidadMates <=20){
//     document.write('<br> Mate cebado N: ' + cantidadMates);
//     cantidadMates = cantidadMates + 1; //cantidadmates++ todo es lo mismo que eso
// }
// arrancar de 0 o de 1 depende del problema que tengamos y se pone hasta <20 por lo que son 20 mates asi se cuentan
// let cantidadMates =20;

// ejemplo while

// while (cantidadMates >=1){
//     document.write('<br> Mate cebado N: ' + cantidadMates);
//     cantidadMates = cantidadMates -1; //cantidadmates-- todo es lo mismo que eso
// }

// segundo bucle do while
//  ejemplo de bucle-while, haceer .... mientras (se cumpla la condicion logica)

/*
    do{
        todas las lineas de codigos q quiero ejecutar varias veces
      cambiar la condicion logica
    }while(condicion logica)
*/

// let cantidadMates = 20;
// do{
//     document.write('<br> Mate cebado N: ' + cantidadMates);
//     cantidadMates--; // cantidadMates = cantidadMates -1;
// }while( cantidadMates >=1 )

// solo se cumple cuando se cumple la ccondicion logica, o solo se cumple al menos una vez



// bucle for (funciona exactaemnte igual al bucle while su diferencia es la sintaxis)

// ejemplo bucle for

/* for(inicializar una variable ; condicion logica ; moodificar la variable creada al inicio ){
    todo el codigo que quiero ejecutar muchas veces
}

*/

for(let mates = 20 ; mates >= 1 ; mates--){
    document.write('<br> Mate cebado N: ' + mates);
}
