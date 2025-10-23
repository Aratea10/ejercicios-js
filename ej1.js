/* 
Dado estos productos. 

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

Calcula el precio total de todos los productos sumando los subtotales de cada uno (precio * cantidad).

Usa una estructura condicional (if, else if, else) para mostrar un mensaje según el total:
Si el total es menor a 50, muestra "Puedes agregar más productos".
Si el total es entre 50 y 100, muestra "Estás cerca de tu límite de compra".
Si el total es mayor a 100, muestra "Has alcanzado el límite de tu compra".

Muestra el total y el mensaje en un único console.log.
*/

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

const subtotalA = productAPrice * productAQuantity;
const subtotalB = productBPrice * productBQuantity;
const subtotalC = productCPrice * productCQuantity;

const total = subtotalA + subtotalB + subtotalC;

let mensaje = "";
if (total < 50) {
	mensaje = "Puedes agregar más productos";
} else if (total <= 100) {
	mensaje = "Estás cerca de tu límite de compra";
} else {
	mensaje = "Has alcanzado el límite de tu compra";
}

console.log(`Total: ${total} — ${mensaje}`);