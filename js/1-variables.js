// esto es un comentario de una unica linea

/* esto es un 
comentario de 
multiples
lineas
*/

// mostrar o imprimir un mensaje en el documento html o pantalla
document.write('<h1>Hola mundo, año 2022 canción</h1>');

// mostrar un mensaje por consola
console.log('alguna frase');

// mostrar un mensaje por unaa ventana emergente
// alert('esto es una ventana emergente');

// mostrar por pantalla la suma de dos numeros 29 + 6 
// cuando es numeros mas numeros debemos poner sin comillas
document.write('<p>Resultado: ' + (29 + 6) + '</p>');
// Resultado: 29

// siempre se utiliza el + para concatenar

// crear o declarar o inicializar Variables (var - let - const)
// = es el nombre del operador lo que escribimoso a la derecha se almacena en la variable de la izquierda
let nombrePersona = 'Cristian';
let dolar = 238;

document.write('<p>Persona: ' + nombrePersona + '</p>');
document.write('<p>Play5: $' + (500 * dolar) + ' sin impuestos</p>');

// actualizar el valor del dolar
// cuando la variable ya existe solo debo usar sus nombre
dolar = 220;
document.write('<p>Play5: $' + (500 * dolar) + ' sin impuestos</p>');

// pedimos al usuario que ingrese el valor del dolar

dolar = parseInt(prompt('Ingrese el valor del dolar'));
// ventana prompt es para ingresar numeros el valor que ingresamos es como texto
// parseint
console.log(dolar)

document.write('<p>Play5: $' + (500 * dolar) + ' sin impuestos</p>');