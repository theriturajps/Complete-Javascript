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

// Not Duplicate

const orderSet = new Set(['pasta', 'pizza', 'pasta', 'pizza', 'Risotto'])

console.log(orderSet) // Set(3) {'pasta', 'pizza', 'Risotto'}

console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}
console.log(new Set('ritu raj pratap singh').size); // 12


console.log(orderSet.size); // 3

console.log(orderSet.has('pasta')); // true
console.log(orderSet.has('bread')); // false

orderSet.add('garlic bread');
console.log(orderSet) // Set(4) {'pasta', 'pizza', 'Risotto', 'garlic bread'}

orderSet.delete('Risotto')
console.log(orderSet) // Set(3) {'pasta', 'pizza', 'garlic bread'}

// orderSet.clear()
console.log(orderSet) // Set(0) {size: 0}

for (const item of orderSet) {
  console.log(item);
}




// Example

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef']


const staffUnique = new Set(staff)
console.log(staffUnique); // Set(3) {'waiter', 'chef', 'manager'}
console.log(staffUnique.size); // 3 diffrent latters


const staffUniqueArray = [...new Set(staff)]
console.log(staffUniqueArray); // (3) ['waiter', 'chef', 'manager']


console.log(new Set('ritu raj pratap singh').size); // 12 diffrent latters
console.log(new Set('riturajpratapsingh').size) // 11 diffrent latters
console.log(new Set('r').size) // 1 diffrent latters
console.log(new Set('raj').size) // 3 diffrent latters


const currencies = new Set(['IND', 'DHK', 'USD', 'RBL', 'PND'])
console.log(currencies);
currencies.forEach((val, _) => {
  console.log(`${_} : ${val}`);
})