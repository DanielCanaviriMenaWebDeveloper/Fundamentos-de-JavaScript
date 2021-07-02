/****** Comparando Variables en JS  ******/
/* En estos ejemplos se comparan valores primitivos */
var x = 4, y = '4'
console.log(x); // Output: 4
console.log(y); // Output: 4

/* 1ra forma de comparar variables, usando "==" */
console.log(x == y); // Output: true
/* Nota: JavaScript lleva en este caso las dos variables a un 
    mismo tipo de dato y posteriormente procede a compararlos. */

/* 2da forma de comparar variables, usando "==="  */
console.log(x === y); // Output: false
/* Nota: En este caso JavaScript compara que las variables contengan el 
    mismo tipo de dato y el mismo valor */


/****** Comparando Objetos en JS  ******/
var daniel = {
    nombre: 'Daniel'
}

var otraPersona = {
    nombre: 'Daniel'
}

console.log(daniel); // Output: Object { nombre: "Daniel" }
console.log(otraPersona); // Output: Object { nombre: "Daniel" }

/* Comparando los objeros definidos con el operador "==" */
console.log(daniel == otraPersona); // Output: false

/* Comparando los objeros definidos con el operador "===" */
console.log(daniel === otraPersona); // Output: false

/* Nota : JS lo que compara es la referencia a la variable que se esta utilizando */
