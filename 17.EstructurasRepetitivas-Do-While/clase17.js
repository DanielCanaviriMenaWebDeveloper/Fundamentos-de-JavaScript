var contador = 0;

const llueve = () => Math.random() < 0.25

console.log(llueve());

do {
    contador ++;
}while (!llueve())

console.log(`Fui a ver si llovia ${contador} veces`)



function Persona(nombre, apellido, altura)