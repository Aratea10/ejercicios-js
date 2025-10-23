/* 
Crea un programa que determine si un usuario puede recibir una promoción basada en su selección de productos.

Instrucciones:
1. Crea dos variables que representen el nombre de un producto seleccionado por el usuario y la cantidad. (En nuestro caso será usando prompt).
  const selectedProduct = prompt('Ingresa el nombre del producto');
  const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

2. Usa operadores lógicos para determinar si el usuario puede tener una promoción especial:
- Si selecciona un "T-shirt" y la cantidad es 2 o más, el mensaje será "¡Recibes un 10% de descuento en la segunda camiseta!".
- Si selecciona un "Cap" y la cantidad es 3 o más, el mensaje será "¡Obtén una gorra gratis por la compra de 3!".
- Si no cumple ninguna de las condiciones, el mensaje será "No hay promociones para esta selección".

Muestra el mensaje en un único console.log. 
*/

const selectedProduct = prompt("Ingresa el nombre del producto");
const selectedQuantity = parseInt(prompt("Ingresa la cantidad"), 10);

const product = selectedProduct ? selectedProduct.trim().toLowerCase() : "";
const qty = Number.isNaN(selectedQuantity) ? 0 : selectedQuantity;

let message = "No hay promociones para esta selección";

if (product === "t-shirt" && qty >= 2) {
	message = "¡Recibes un 10% de descuento en la segunda camiseta!";
} else if (product === "cap" && qty >= 3) {
	message = "¡Obtén una gorra gratis por la compra de 3!";
}

console.log(message);



