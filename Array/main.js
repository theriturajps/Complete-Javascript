'use strict'


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



let arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()); // (5) ['j', 'g', 'h', 'i', 'j']

console.log(arr2) // (5) ['f', 'g', 'h', 'i', 'j']

