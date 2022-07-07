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
let cantidadMates =20;
while (cantidadMates >=1){
    document.write('<br> Mate cebado N: ' + cantidadMates);
    cantidadMates = cantidadMates -1; //cantidadmates-- todo es lo mismo que eso
}