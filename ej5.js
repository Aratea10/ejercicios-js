/*
Dado este listado de valores, crea un programa que separe los números pares de los impares en dos arrays diferentes.

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

let evenNumbers = []; // Array para almacenar números pares
let oddNumbers = []; // Array para almacenar números impares

Para mostrarlos por pantalla que se muestren en un 2 console.log fuera del bucle.
*/

for (const num of numbers) {
  if (Number.isFinite(num)) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }
}

console.log("even:", evenNumbers, "odd:", oddNumbers);