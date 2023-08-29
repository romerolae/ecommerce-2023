/**
 * This function is used to get the total price of the products
 * @param {Array} products productToCart: array of objects
 * @returns {number} totalPrice: total price of products
 */

export const totalPrice = (products) => {
	let sum = 0;
	products.forEach((product) => (sum += product.price));
	return sum;
};
