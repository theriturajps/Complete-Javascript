'use strict'

import { config } from './config.js'
import { addToCart } from "./shoppingCart.js";

/// Top level await

const sendReq = await fetch(config.postURL)
const data = await sendReq.json()
console.log(data.at(-2))

///////////////////////////////////////////////////////////////////////////////////////////////

const getLastPost = async () => {
	const sendReq = await fetch(config.postURL)
	const data = await sendReq.json()
	return {title: data.at(-1).title, text: data.at(-1).body}
}

const lastPost1 = await getLastPost()
console.log(lastPost1)

// or

const lastPost2 = getLastPost()
lastPost2.then(
	data => console.log(data)
);

///////////////////////////////////////////////////////////////////////////////////////////////

addToCart('potato', 5)

///////////////////////////////////////////////////////////////////////////////////////////////

const shoppingCart2 = (function () {
	const cart = [];
	const shoppingCost = 10
	const totalPrice = 237
	const totalQuantity = 23

	const addToCart = function (product, quantity) {
		cart.push({ product, quantity })
		console.log(`${quantity} ${product} added to cart, shipping cost is ${shoppingCost}`);
	}

	const orderStock = function (product, quantity) {
		cart.push({ product, quantity })
		console.log(`${quantity} ${product} added to cart`);
	}

	return {
		addToCart, cart, totalPrice, totalQuantity, orderStock
	}
})()

shoppingCart2.addToCart('apple', 2)
shoppingCart2.addToCart('pizza', 4)

console.log(shoppingCart2); // {cart: Array(2), totalPrice: 237, totalQuantity: 23, addToCart: ƒ}
console.log(shoppingCart2.shoppingCart); // undefined -> private

shoppingCart2.orderStock('onion', 5)
console.log(shoppingCart2); // {cart: Array(3), totalPrice: 237, totalQuantity: 23, addToCart: ƒ, orderStock: ƒ}

///////////////////////////////////////////////////////////////////////////////////////////////
