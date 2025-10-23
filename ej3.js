/* 
Crea una función para poder usar el código de la promoción de productos en el carrito de compras. Esta función debe recibir el nombre del producto y la cantidad, y devolver un mensaje con la promoción aplicada.

Usa tu código o este:
let message = '';
// Verificando las condiciones para aplicar la promoción
if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
  message = '¡Recibes un 10% de descuento en la segunda camiseta!';
} else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
  message = '¡Obtén una gorra gratis por la compra de 3!';
} else {
  message = 'No hay promociones para esta selección';
}

// ejemplo
const result = tuFuncion('prod1', 12);
console.log(result); // No hay promociones para esta selección
*/

function getPromotionMessage(selectedProduct, selectedQuantity) {
	const product = (selectedProduct || "").trim().toLowerCase();
	const qty = Number.isFinite(Number(selectedQuantity)) ? Number(selectedQuantity) : 0;

	if (product === "t-shirt" && qty >= 2) {
		return "¡Recibes un 10% de descuento en la segunda camiseta!";
	} else if (product === "cap" && qty >= 3) {
		return "¡Obtén una gorra gratis por la compra de 3!";
	}
	return "No hay promociones para esta selección";
}

const result1 = getPromotionMessage("prod1", 12);
console.log(result1);

const result2 = getPromotionMessage("T-shirt", 2);
console.log(result2);
const result3 = getPromotionMessage("Cap", 3);
console.log(result3);