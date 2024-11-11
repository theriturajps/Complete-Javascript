'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun']

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [`day - ${6 + 1}`]: {
    open: 0,
    close: 24,
  },
}

const restaurant = {
  name: 'Hotel Raj',
  location: 'Lane 9, Florida, USA',
  categories: ['Indian', 'American', 'Italian', 'Desert'],
  starterMenu: ['Gulab Jamun', 'Ice Cream', 'Drink'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // (Before ES6)
  // openingHours: openingHours,

  openingHours, // Enhanced object literals (After ES6)

  // Enhanced object literals (After ES6)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]]
  },

  // Enhanced object literals (After ES6)
  orderDelivery({ starterIndex = 1, address, time = '20:00', mainIndex = 0 }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  // Enhanced object literals (After ES6)
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    )
  },

  // Enhanced object literals (After ES6)
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng)
    console.log(otherIng)
  },
}

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open) // 11

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open)

// optional chaining

console.log(restaurant.openingHours.mon?.open) // undefined

/** Error (Uncaught TypeError)
 * console.log(restaurant.openingHours.mon.open) 
*/

console.log(restaurant.openingHours?.mon?.open) // undefined

console.log(`-----------------------------------------------------------------------`);

const days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun']

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`on ${day} we open at ${open}`)
}


// Method

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // (2) ['Gulab Jamun', 'Ice Cream']

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist') // Method does not exist


// Arrays

const users = [
  {
    name: 'raj',
    email: 'aa@g.com'
  }
]

console.log(users[0]?.name ?? 'user array is empty'); // optional chaining

console.log(users[0]?.pass ?? 'pass array is empty'); // optional chaining