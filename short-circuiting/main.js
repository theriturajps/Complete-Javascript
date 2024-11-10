'use strict'

const restaurant = {
  name: 'Hotel Raj',
  location: 'Lane 9, Florida, USA',
  categories: ['Indian', 'American', 'Italian', 'Desert'],
  starterMenu: ['Gulab Jamun', 'Ice Cream', 'Drink'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thr: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]]
  },

  orderDelivery: function ({
    starterIndex = 1,
    address,
    time = '20:00',
    mainIndex = 0,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    )
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng)
    console.log(otherIng)
  },
}

/////////////////////////////////----> OR <----//////////////////////////////////////////////////////////////////////

// Logical Oprator -> use any datatype, return any datatype, use short-circuiting

console.log(3 || 'jonas'); // 3
console.log('' || 'jonas'); // jonas
console.log(true || 0); // true
console.log(undefined || null); // null

///////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello

///////////////////////////////////////////////////////////////////////////////////////////////////////

const g1 = restaurant.numG ? restaurant.numG : 10;
console.log(g1); // 10

///////////////////////////////////////////////////////////////////////////////////////////////////////

const g2 = restaurant.numG || 10
console.log(g2); // 10

/////////////////////////////////----> AND <----//////////////////////////////////////////////////////////////////////

console.log(0 && 'Jonas'); // 0
console.log(8 && 'Jonas'); // Jonas
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true
console.log(false && false); // false
console.log('hello' && 23 && null && undefined); // null

///////////////////////////////////////////////////////////////////////////////////////////////////////

if (restaurant.orderPizza) {
	restaurant.orderPizza('mushroom', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('chilli', 'onion') // same work alternative of 'if block'
