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


const question = new Map([
  ['question', 'A is ?'],
  [1, 'alphabate'],
  [2, 'number'],
  [3, 'word'],
  ['correct', 1],
  [true, 'correct ❤️'],
  [false, 'wrong 😒']
])

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours))
console.log(hourMap);

console.log(`----------------------------------------------------------------`)

// const answer = Number(prompt(`Q. ${question.get('question')}`))

const answer = 1 // sample

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Option ${key} :- ${value}`)
  } 
}

if (question.get('correct') === answer) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

console.log(`----------------------------------------------------------------`)

// convert map to an array

console.log(question);

const questionArray = [...question]

console.log(questionArray); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

console.log(`----------------------------------------------------------------`)

console.log(question.entries()); // MapIterator {'question' => 'A is ?', 1 => 'alphabate', 2 => 'number', 3 => 'word', 'correct' => 1, …}
console.log([...question.entries()]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

console.log(question.keys()); // MapIterator {'question', 1, 2, 3, 'correct', …}
console.log([...question.keys()]); // (7) ['question', 1, 2, 3, 'correct', true, false]

console.log([...question.values()]); // (7) ['A is ?', 'alphabate', 'number', 'word', 1, 'correct ❤️', 'wrong 😒']

console.log(`----------------------------------------------------------------`)


