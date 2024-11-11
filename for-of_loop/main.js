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

const menu = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu
]

// get arrays list
for (let item of menu) {
  console.log(item);
}

// get array number
for (let el of menu.entries()) {
  console.log(el);
}

console.log([...menu.entries()]); // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// get array number with name
for (let el of menu.entries()) {
  console.log(`${el[0] + 1} : ${el[1]}`);
}


for (const [i, el] of menu.entries()) {
  console.log(`${i+1} : ${el}`)
}