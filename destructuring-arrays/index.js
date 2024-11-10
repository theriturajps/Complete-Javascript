'use strict';

const restaurant = {
  name: 'Hotel Raj',
  location: 'Lane 9, Florida, USA',
  categories: ['Indian', 'American', 'Italian', 'Desert'],
  starterMenu: ['Gulab Jamun', 'Ice Cream', 'Drink'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]]
	}
}


////////////// retrievr without destructring

const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

console.log(a, b, c) // 2 3 4

//////////////////////////////////////////

////////////// retrievr using destructring

const [x, y, z] = arr

console.log(arr)
console.log(x, y, z) // 2 3 4

//////////////////////////////////////////


// const [first, second, third] = restaurant.categories
// console.log(first, second); // Indian American

const [first, , third] = restaurant.categories
console.log(first, third); // Indian Italian



// Converting/replacing the arrays by destructuring

let [main, ,secondary] = restaurant.categories
console.log(main, secondary);


[main, secondary] = [secondary, main]
console.log(main, secondary);


/////////// From using a function

console.log(restaurant.order(2, 0)) // (2) [Drink, Gulab Jamun]


const [startCourse, mainCourse] = restaurant.order(2, 0)
console.log(startCourse, mainCourse) // Drink Gulab Jamun



////// If have a nested arrays (nested destructuring)

const nested = [2, 4, [5, 6]];


const [i, , j] = nested
console.log(i, j); // 2 (2) [5, 6]

const [m, , [n, o]] = nested
console.log(m, n, o); // 2 5 6


///////// (default destructuring)

const [r, s, t] = [8, 9];
console.log(r, s, t); // 8 9 undefined

const [g=1, f=1, h=1] = [8, 9] // default (undefined === 1)
console.log(g,f,h); // 8 9 1