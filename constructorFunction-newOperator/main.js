'use strict';

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

	// never create this method under constructor function
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// }
}

const raj = new Person('Raj', 2002)
const aman = new Person('aman', 2005)
const anu = new Person('anurag', 2011)
const babu = new Person('babu', 2003)

console.log(aman, anu, babu, raj);

console.log(aman instanceof Person); // true
