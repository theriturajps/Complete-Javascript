'use strict'

console.log(`---------------------------------------------------------`)

let arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr.slice(0, 2)) // (2) ['a', 'b']
console.log(arr.slice(2)) // (3) ['c', 'd', 'e']

console.log(arr.slice(-1)) // ['e']
console.log(arr.slice(-2)) // (2) ['d', 'e']
console.log(arr.slice(1, -2)) // (2) ['b', 'c']

console.log(arr.slice()) // (5) ['a', 'b', 'c', 'd', 'e'] Copy of an array

console.log([...arr]) // (5) ['a', 'b', 'c', 'd', 'e']

console.log(arr.splice(0, 2)) // (2) ['a', 'b']
console.log(arr) // (3) ['c', 'd', 'e']

console.log(`---------------------------------------------------------`)

let arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()) // (5) ['j', 'g', 'h', 'i', 'j']
console.log(arr2) // (5) ['f', 'g', 'h', 'i', 'j']

const letter = arr.concat(arr2) // (8) ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(letter)
console.log([...arr, ...arr2]) // (8) ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log([...arr, ...arr2].join(' <-> '))

console.log(`---------------------------------------------------------`)

// at method

const arr3 = [11, 22, 33]

console.log(arr3[0]) // 11
console.log(arr3.at(0)) // 11

console.log(arr3.at(-1)) // 33
console.log(arr3[arr3.length - 1]) // 33
console.log(arr3.slice(-1)[0]) // 33

console.log('rituraj'.at(0)) // r
console.log('rituraj'.at(-1)) // j



//////////////////// Looping using (forEach)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

for (const movement of movements) {
  if (movement > 0) {
    console.log(`Deposited ${movement}`)
  } else {
    console.log(`Withdrown ${Math.abs(movement)}`)
  }
}

console.log(`------------ seprater (forEach) ------------------------`)

// using forEach
movements.forEach(function (movment) {
	if (movment > 0) {
    console.log(`Deposited ${movment}`)
  } else {
    console.log(`Withdrown ${Math.abs(movment)}`)
  }
})

/*
movements.forEach((movment) => {})
*/


