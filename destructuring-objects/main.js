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

  orderDelivery: function ({ starterIndex = 1, address, time = '20:00', mainIndex = 0 }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`
    ) 
  },
}



// object destructring
const { name, categories, openingHours } = restaurant // same object name as made.
console.log(name, openingHours, categories); // Hotel Raj {thr: {…}, fri: {…}, sat: {…}} (4) ['Indian', 'American', 'Italian', 'Desert']



// variable name to be diffrent from property name.
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags); // Hotel Raj {thr: {…}, fri: {…}, sat: {…}} (4) ['Indian', 'American', 'Italian', 'Desert']


// set default value
const { menu = [], starterMenu: starter = [] } = restaurant
console.log(menu, starter); // [] (3) ['Gulab Jamun', 'Ice Cream', 'Drink']


// Mutating Variables
let a = 111
let b = 999

const obj = { a: 23, b: 7, c: 14 }
console.log(a, b); // 111 999

({ a, b } = obj)
console.log(a,b); // 23 7


// nested destructring

const { fri } = openingHours
console.log(fri); // {open: 11, close: 23}


const { fri:{open, close} } = openingHours
console.log(open, close); // 11 23

const { fri:{open: o, close: c} } = openingHours // variable name to be diffrent from property name.
console.log(o, c); // 11 23



restaurant.orderDelivery({
  time: '22: 30',
  address: 'via del sol, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'via del sol, 21',
  starterIndex: 1,
})
