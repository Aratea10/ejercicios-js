
// Paso 1: Crea un array vacío llamado "numeros".
const numeros = [];

// Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra KeepCoding.
numeros.push(1, 2, 3, 'KeepCoding', 4, 5);

// Paso 3: Imprime el contenido del array "numeros" en la consola.
console.log(numeros);

// Paso 4: Detecta con código si dentro del array está la palabra KeepCoding. Si está, imprime el mensaje "este array no solo tiene números".
if (numeros.includes('KeepCoding')) {
    console.log('este array no solo tiene números');
}

// Paso 5: Agrega el número 10 al inicio del array "números".
numeros.unshift(10);

// Paso 6: Imprime el contenido del array "números" en la consola.
console.log(numeros);

// Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra KeepCoding.
const indiceKeepCoding = numeros.indexOf('KeepCoding');
console.log(indexKeepCoding);

// Paso 8: Elimina la palabra KeepCoding a partir del índice anterior.
if (indexKeepCoding !== -1) {
    numeros.splice(indexKeepCoding, 1);
}

// Paso 9: Imprime el contenido del array "números" en la consola.
console.log(numeros);

// Paso 10: Imprime la longitud del array "números" en la consola.
console.log(numeros.length);