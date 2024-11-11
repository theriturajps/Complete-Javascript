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
  }
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

// Property NAMES
const property = Object.keys(openingHours)
console.log(property);

console.log(`we open for ${property.length} days`)

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

let openStr = `we open for ${property.length} days :`
for (const day of property) {
  openStr += `, ${day}`;
}

console.log(openStr);


// Property VALUES

const value = Object.values(openingHours); console.log(value); // (3) [{…}, {…}, {…}]


// Entries with Objects

const entries = Object.entries(openingHours);
console.log(entries); // (3)[(Array(2), Array(2), Array(2))]


for (const x of entries) {
  console.log(x);
}

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`)
}