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
	
	orderPizza: function (mainIng,...otherIng) {
		console.log(mainIng);
		console.log(otherIng)
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// SPREAD, because on RIGHT side of '=' sign
const arr = [1, 2, ...[3, 4]]

// REST, because on LEFT side of '=' sign
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others) // 1 2 (3) [3, 4, 5]

///////////////////////////////////////////////////////////////////////////////////////////////////////

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]
console.log(pizza, risotto, otherFood) // Pizza Risotto (3) ['Gulab Jamun', 'Ice Cream', 'Drink']

////////////////////////////// Objects ////////////////////////////////////////////////////////////////

const { sat, ...weakends } = restaurant.openingHours
console.log(sat, weakends) //

////////////////////////////// Functions //////////////////////////////////////////////////////////////////

const add = function (...nums) {
  let sum = 0

  nums.forEach((element) => {
    sum = sum + element
  })

  console.log(sum)
}

add(2, 3, 2, 4) // 11

//////////////////////////////////////////////////////////////////////////

const x = [2, 1, 3]
add(...x) // 6

//////////////////////////////////////////////////////////////////////////

restaurant.orderPizza('mushroom', 'onion', 'olive', 'chilli')
restaurant.orderPizza('mushroom')


