/* Variables con valores de tipo Numerico */
var edad = 26;
console.log(edad); // Output: 26

/* Incrementando el valor de la variable */
edad = edad + 1;
console.log(edad); // Output: 27

/* Otra sintaxis para el incremento */
edad += 1;
console.log(edad); // Output: 28

/* Decremento en el valor de una variable */
var peso = 74
peso = peso - 2;
console.log(peso); // Output: 72

/* Otra sintaxis para el decremento */
peso -= 2;
console.log(peso); // Output: 70

/* Mas ejemplos de incremento y decremento */
var sandwitch = 1
peso = peso + sandwitch;
console.log(peso); // Output: 71

var jugarAlFutbol = 3;
peso = peso - jugarAlFutbol;
console.log(peso); // Output: 68

/* Co la otra sintaxis explicada anteriormente  */
peso += sandwitch; /* Incremento */
console.log(peso); // Output: 69

peso -=jugarAlFutbol; /* Decremento */
console.log(peso); // Output: 66

/* Operaciones con decimales */
var precioVino = 200.3;

var total = precioVino * 3;
console.log(total); // Output: 600.9000000000001
/* Nota: En JS la manera de calcular decimales no es tan precisa */

/* Forma de dar solución */
var precioSoda = 40.3;

/* Este tipo de truco matematico nos permitira obtener un resultado preciso */
var totalPrecioSodas = Math.round(precioSoda * 100 * 3) / 100;
console.log(totalPrecioSodas); // Output: 120.9

/* Para el ejemplo anterior */
var total = Math.round(precioVino * 100 * 3) / 100;
console.log(total); // Output: 600.9 

/* Para agregar n decimales al resultado */
var totalStr = total.toFixed(2); /* Considera 2 decimales despues de la coma */
console.log(totalStr); // Output: "600.90"

totalStr = total.toFixed(4); /* Considera 4 decimales despues de la coma  */
console.log(totalStr); //Output: "600.9000"

/* Transformando de string a decimal */
total2 = parseFloat(totalStr);
console.log(total2); // Output: 600.9

/* Division */
var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;
console.log(cantidadDePorcionesPorPersona + ' porciones'); // Output: 4 porciones


