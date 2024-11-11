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

/////////////////////////////////////////////////////////////////////////////////////////////

const rest1 = {
  name: "Name",
  numGuest: 0,
}

const rest2 = {
  name: "Name",
  owner: 'Ram',
}

// OR assignment operator

rest1.numGuest = rest1.numGuest || 10
// rest1.numGuest ||= 10
console.log(rest1); // {name: 'Name', numGuest: 20}

rest2.numGuest = rest2.numGuest || 10
// rest2.numGuest ||= 10
console.log(rest2); // {name: 'Name', owner: 'Ram', numGuest: 10}

rest2.numGuest = rest1.numGuest || 10
console.log(rest2); // {name: 'Name', owner: 'Ram', numGuest: 20}

/////////////////////////////////////////////////////////////////////////////////////////////

// Nullish assignment operator (null or undefined)
rest1.numGuest ??= 10
rest2.numGuest ??= 10

/////////////////////////////////////////////////////////////////////////////////////////////

rest1.owner = rest1.owner && '<NaN>'
// rest1.owner &&= '<NaN>'
console.log(rest1)

rest2.owner = rest2.owner && '<NaN>'
// rest2.owner &&= '<NaN>'
console.log(rest2);

/////////////////////////////////////////////////////////////////////////////////////////////