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

console.log(`------------ seprater ------------------------`)


for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movment ${i + 1} : Deposited ${movement}`)
  } else {
    console.log(`Movment ${i + 1} : Withdrown ${Math.abs(movement)}`)
  }
}

console.log(`------------ seprater (forEach) ------------------------`)

/*
movements.forEach((movment) => {})
*/


// using forEach
movements.forEach(function (movment) {
	if (movment > 0) {
    console.log(`Deposited ${movment}`)
  } else {
    console.log(`Withdrown ${Math.abs(movment)}`)
  }
})

console.log(`------------ seprater ------------------------`)


movements.forEach(function (mov, i, arr) {
	if (mov > 0) {
    console.log(`Movment ${i + 1} : Deposited ${mov}`)
  } else {
    console.log(`Movment ${i + 1} : Withdrown ${Math.abs(mov)}`)
  }
})


////////////// Arrays Practice ///////////////////////////

const juliaDogs = [3, 5, 2, 12, 7]
const kateDogs = [4, 1, 15, 8, 3]

const checkDogs = (juliaDogs, kateDogs) => {

  const juliaDogsCorrected = juliaDogs.slice()
  juliaDogsCorrected.splice(-2)
  juliaDogsCorrected.splice(0, 1)

  const dogs = juliaDogsCorrected.concat(kateDogs)

  dogs.forEach((dog, num) => {
    if (dog >= 3) {
      console.log(`Dog number ${num + 1} is an adult and is ${dog} years old.`)
    } else {
      console.log(`Dog number ${num + 1} is still a puppy.`)
    }
  })

}

checkDogs(juliaDogs, kateDogs)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// map, filter, reduce

//// Map
const m2 = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUSD = 1.1

const m2Usd = m2.map( (val) => {
  return Math.floor(val * eurToUSD) // returns an array  
})

console.log(m2Usd); // (8) [220, 495, -441, 3300, -716, -143, 77, 1430]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const movUSDfor = []
for (const mov of m2) { 
  movUSDfor.push(Math.floor(mov * eurToUSD))
}

console.log(movUSDfor); // (8) [220, 495, -441, 3300, -716, -143, 77, 1430]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const array = [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7) // (7) [empty × 7]
console.log(x);

console.log(x.map(() => 5)) // (7) [empty × 7]

console.log(x.fill(1)) // (7) [1, 1, 1, 1, 1, 1, 1]

console.log(x.fill(2, 3, 5)); // (7) [1, 1, 1, 2, 2, 1, 1]

console.log(array.fill(8, 2, 5)) // (7) [1, 2, 8, 8, 8, 6, 7]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const y = Array.from({ length: 7 }, (_, num) => num + 1) // '_' means it has no use
console.log(y); // (7) [1, 2, 3, 4, 5, 6, 7]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// this a nice title => This Is a Nice Title

const convertTitleCase = function (title) {

  const captilize = str => str[0].toUpperCase() + str.slice(1)

  const expections = ['a', 'is', 'and', 'an', 'the', 'but', 'or', 'in', 'with', 'on']
  
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (expections.includes(word) ? word : captilize(word))).join(' ')

  return captilize(titleCase)
}

console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a LONG title but not too long'))
console.log(convertTitleCase('and here is another title with an EXAMPLE'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


