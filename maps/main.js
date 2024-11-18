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


const rest = new Map()
rest.set('name', 'raj restro')
rest.set(1, 'india')
rest.set(2, 'USA')


console.log(rest); // Map(3) {'name' => 'raj restro', 1 => 'india', 2 => 'USA'}

rest
  .set('catg', ['Indian', 'American', 'Italian', 'Desert'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'open')
  .set(false, 'closed')


console.log(rest.get(true)) // we are men
console.log(rest.get('open')) // 11
console.log(rest.get('catg')) // (4) ['Indian', 'American', 'Italian', 'Desert']

const time = new Date;
const nowTIme = time.getHours()

console.log(rest.get(nowTIme > rest.get('open') && nowTIme < rest.get('close'))) // open


console.log(rest.has('catg')); // true

rest.delete(2) // deleted USA

console.log(rest);

console.log(rest.size); // 7

rest.clear()

console.log(rest.size); 0

rest.set([1, 2], 'test');  console.log(rest); console.log(rest.get([1, 2])) // undefined

let arr = [1,2]

rest.set(arr, 'this is array'); console.log(rest.get(arr)); // this is array

rest.set(document.querySelector('h1'), 'heading')

console.log(rest)



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])

currencies.forEach( function (key, val, map){
    console.log(`${val} -:- ${key} -:- ${map}`)
  }
)