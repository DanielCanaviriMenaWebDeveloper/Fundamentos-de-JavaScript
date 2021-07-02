var nombre = 'Daniel', apellido = 'Mena';
console.log(nombre, apellido); // Output: Daniel Mena

var nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas); // Output: DANIEL

var apellidoEnMinusculas = apellido.toLowerCase();
console.log(apellidoEnMinusculas); // Output: mena

var primeraLetraDelNombre = nombre.charAt(0);
console.log(primeraLetraDelNombre); // Output: D

var cantidadDeLetrasDelNombre = nombre.length
console.log(cantidadDeLetrasDelNombre); // Output: 6

/* Concatenar dos Strings */
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto); // Output: Daniel Mena

/* Interpolación de Variables */
var nombreCompletoConInterpolacion = `${nombre} ${apellido.toUpperCase()}`;
console.log(nombreCompletoConInterpolacion); // Output: Daniel MENA

/* Acceder a un SubString */
var str = nombre.charAt(1) + nombre.charAt(2);
console.log(str); // Output: an

var substr = nombre.substr(1, 3);
console.log(substr); // Output: ani

/* Ejercicio:
    Mostrar al usuario la ultima letra de su nombre 
*/

var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1);
console.log(ultimaLetraDelNombre); // Output: l

