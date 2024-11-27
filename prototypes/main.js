'use strict'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 1. new {} is created
 * 2. function is called, this = {}
 * 3. {} linked to prototype
 * 4. function automatically return {}
 */

const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

const raj = new Person('Raj', 2002)
const aman = new Person('aman', 2005)
const anu = new Person('anurag', 2011)
const babu = new Person('babu', 2003)

console.log(aman, anu, babu, raj)

console.log(aman instanceof Person) // true

// Prototypes

console.log(Person.prototype)

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

raj.calcAge() // 35
aman.calcAge() // 32
babu.calcAge() // 34
anu.calcAge() // 26

console.log(raj.__proto__) // {calcAge: ƒ}

console.log(raj.__proto__ === Person.prototype) // true
console.log(Person.prototype.isPrototypeOf(raj)) // true

console.log(Person.prototype.isPrototypeOf(Person)) // false

