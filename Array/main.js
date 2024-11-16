'use strict'

console.log(`---------------------------------------------------------`)

let arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr.slice(0, 2)); // (2) ['a', 'b']
console.log(arr.slice(2)); // (3) ['c', 'd', 'e']

console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(-2)); // (2) ['d', 'e']
console.log(arr.slice(1, -2)); // (2) ['b', 'c']

console.log(arr.slice()); // (5) ['a', 'b', 'c', 'd', 'e'] Copy of an array


console.log([...arr]); // (5) ['a', 'b', 'c', 'd', 'e']


console.log(arr.splice(0, 2)); // (2) ['a', 'b']
console.log(arr); // (3) ['c', 'd', 'e']

console.log(`---------------------------------------------------------`)


let arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()); // (5) ['j', 'g', 'h', 'i', 'j']
console.log(arr2) // (5) ['f', 'g', 'h', 'i', 'j']


const letter = arr.concat(arr2) // (8) ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(letter);
console.log([...arr, ...arr2]); // (8) ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


console.log([...arr, ...arr2].join(' <-> '))

console.log(`---------------------------------------------------------`);

// at method

const arr3 = [1, 2, 3]

console.log(arr3[0]); // 1
console.log(arr3.at(0)); // 1


console.log(arr3.at(-1)); // 3
console.log(arr3[arr3.length - 1]) // 3
console.log(arr3.slice(-1)[0]); // 3

