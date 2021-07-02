/* Permite mostrar mensajes por consola */
console.log( 'Hola Mundo JavaScript!' ); 

/***** Variables:  var  *****/

/* Declaración de una variable */
var nombre;
console.log(nombre); /* Output: undefined */

/* Asignando un valor a la variable */
nombre = 'Daniel';
console.log(nombre);

/* Concatenar texto y variables */
console.log('Hola ' + nombre);

/* Declarar una variable y asignar valor al mismo tiempo  */
var apellido = 'Canaviri';
console.log(apellido);

/* Declarar mas de una variable en una sola linea */
var ciudad = 'La Paz', pais = "Bolivia";
console.log('Pais: ' + pais + ' Ciudad: ' + ciudad);

/* JavaScript es devilmente tipado: Una variable puede cambiar el tipo de dato que contiene. */
var peso = 73; /* Valor de tipo Number */
console.log('Mi peso es de ' + peso + 'kg.');

peso = '75 kg.'; /* Valor de tipo String */
console.log('Mi peso es de ' + peso);

