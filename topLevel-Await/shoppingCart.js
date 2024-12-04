export const addToCart = function (product, quantity) {
	const cart = []
	cart.push({ product, quantity })
	console.log(`${quantity} ${product} added to cart`);
}
