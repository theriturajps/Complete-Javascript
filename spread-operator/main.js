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
	}
}


const arr = [7, 8, 9]

// Old way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]] // Old way
console.log(badNewArr); // (5) [1, 2, 7, 8, 9]


// using new way
const NewArr = [1, 2, ...arr] // New way
console.log(badNewArr); // (5) [1, 2, 7, 8, 9]


console.log(...NewArr); // 1 2 7 8 9



///////////////////////////////////////////////////////////////

const newMenu = [...restaurant.mainMenu, 'Rice', 'Dal']
console.log(newMenu); // (4) ['Pizza', 'Pasta', 'Risotto', 'Rice']


////////////// Copy array
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy); // (3) ['Pizza', 'Pasta', 'Risotto']

////////////// Join 2 Arrays
const largeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(largeMenu); // (6) ['Pizza', 'Pasta', 'Risotto', 'Gulab Jamun', 'Ice Cream', 'Drink']


// Iterables are arrays, strings, maps, sets != But Not objects

const str = 'raj'


const letters = [...str, ' ', 's.']
console.log(letters); // (5) ['r', 'a', 'j', ' ', 's.']
console.log(...str); // r a j

// console.log(`${...str} Raj`); // Not gonna work


////////////////////////////////////////////////////////////////////////////////////////

const ing = [
  // prompt('Enter the 1st ing :'),
  // prompt('Enter the 2nd ing :'),
  // prompt('Enter the 3rd ing :'),
]

// old
restaurant.orderPasta(ing[0], ing[1], ing[2]) // Here is your declicious pasta with a, b and c

// new
restaurant.orderPasta(...ing) // Here is your declicious pasta with a, b and c


////////////////////////////////////////////////////////////////////////////////////////


// Objects

const newRestro = { ...restaurant, faunder: 'Ritu' }
console.log(newRestro); // worked

/////////////////

const restroCopy = { ...restaurant }
restroCopy.name = 'Hotel Taj'

console.log(restaurant.name); // Hotel Raj
console.log(restroCopy.name); // Hotel Taj
