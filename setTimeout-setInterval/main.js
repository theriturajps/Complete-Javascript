'use strict'

setTimeout(() => {
  console.log(`3 Sec`);
}, 1000)

console.log('Waiting...');

console.log('--------------------------------------------------------------------');

setTimeout((f1, f2) => {
  console.log(`the fruits are ${f1} and ${f2}`) // the fruits are apple and mango
}, 1000, 'apple', 'mango')

console.log('--------------------------------------------------------------------')

const ingredients = ['olives', 'chilli', 'paneer', 'onions']

const pizza = setTimeout((...ingrnts) => {
  console.log(`${ingrnts.join(' ')}`) // olives  paneer onions
}, 2000, ...ingredients);

if (ingredients.includes('chilli')) {
  clearInterval(pizza)
}

console.log('--------------------------------------------------------------------')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


setInterval(() => {
  const now = new Date()
  console.log(now);
}, 1000);