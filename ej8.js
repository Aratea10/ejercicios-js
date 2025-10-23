/*
Ejericio Calculadora con closures

Crear una calculadora con las siguientes funciones:

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
*/

function calculadora() {
	let acc = 0;

	return {
		sumar(n) {
			acc += n;
		},
		restar(n) {
			acc -= n;
		},
		multiplicar(n) {
			acc *= n;
		},
		dividir(n) {
			if (n === 0) return;
			acc /= n;
		},
		total() {
			return acc;
		},
	};
}

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5));        // undefined
console.log(miCalculadora.restar(2));       // undefined
console.log(miCalculadora.multiplicar(4));  // undefined
console.log(miCalculadora.dividir(2));      // undefined
console.log(miCalculadora.sumar(10));       // undefined
console.log(miCalculadora.total());         // 16