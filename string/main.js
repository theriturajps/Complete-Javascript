/*

const airline = 'TATA Air India'
const plane = 'A320'

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

console.log('B737'[0]); // B
console.log(airline.length); // 9
console.log('B737'.length); // 4

console.log(airline.indexOf('i')); // 1
console.log(airline.lastIndexOf('i')); // 7

console.log(airline.indexOf('India')); // 4

console.log(airline.slice(5)); // Air India
console.log(airline.slice(5, 8)); // Air (8 - 5 = 3)

console.log(airline.slice(airline.indexOf('T'), airline.lastIndexOf('A'))) // TATA

console.log(airline.slice(-2)); // ia

*/

const checkMidleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice('-1')
  if (s === 'B' || s === 'E') {
    console.log(`${seat} is Middle Seat`)
  } else {
    console.log(`${seat} is Windows Seat`)
  }
}

// checkMidleSeat('11B')
// checkMidleSeat('23C')
// checkMidleSeat('3E')

console.log(new String('Ritu Raj')); // String {'Ritu Raj'}0: "R"1: "i"2: "t"3: "u"4: " "5: "R"6: "a"7: "j"length: 8[[Prototype]]: String[[PrimitiveValue]]: "Ritu Raj"


const airline = 'TATA Air India'
 
console.log(airline.toUpperCase()); // TATA AIR INDIA
console.log(airline.toLowerCase()); // tata air india

// Fix capitalisation in name

const pass = 'ritu' // Ritu
console.log(pass)

const passLower = pass.toLowerCase()
const passCorrect = passLower[0].toUpperCase() + passLower.slice(1)

console.log(passCorrect)


// comparing email

const email = 'hello@gmail.com'
const loginEmail = '  Hello@Gmail.Com \n'

const lowerCase = loginEmail.toLowerCase() // '  Hello@Gmail.Com '
const trimedEamil = lowerCase.trim() // 'hello@gmail.com'

console.log(email === trimedEamil); // true

const normaliseEmail = loginEmail.toLowerCase().trim() // 'hello@gmail.com'
console.log(email === normaliseEmail) // true


// replacing
// convert to india (₹)
const priceGB = '288,97£'
const priceIN = priceGB.replace('£', '₹').replace(',', '.')
console.log(priceIN); // 288.97₹

/////////////////////////////////////////////////////////////////////////

const note = `the pass come to boarding door 23, boarding door 34 is busy.`;

console.log(note.replace(/door/g, 'gate'))


////////////////// Booleans


const plane = 'A320neo'
console.log(plane.includes('320')); // true
console.log(plane.includes('Air')); // false

console.log(plane.startsWith('A')); // true




/////////////////// Split

console.log('a+very+nice+boy'.split('+')) // (4) ['a', 'very', 'nice', 'boy']
console.log('a+very+nice+boy'.split('+', 4)) // (4) ['a', 'very', 'nice', 'boy']

/////////////



const [first, last] = 'Ritu Raj'.split(' ') // Ritu Raj
console.log(first, last);

const newName = ['Mr.', first, last.toUpperCase()].join(' ') // Mr. Ritu RAJ
console.log(newName);