'use strict'

// Default parameters

const bookings = []

const createBooking = function (flightNum, numPass = 1, price = 199 * numPass) {
	
	// ES5
	// numPass = numPass || 1
	// price = price || 199

	
	const booking = {
		flightNum,
		numPass,
		price
	}

	console.log(booking);

	bookings.push(booking);

}

createBooking('AIR78IN', 45, 4599) // {flightNum: 'AIR78IN', numPass: 45, price: 4599}
createBooking('INDIGO38IN') // {flightNum: 'INDIGO38IN', numPass: 1, price: 199}
createBooking('AIR75USA', 2) // {flightNum: 'AIR75USA', numPass: 2, price: 398}
createBooking('AIR75AS', undefined, 3999) // {flightNum: 'AIR75AS', numPass: 1, price: 3999}

// console.log(bookings);

console.log('--------------------------------------------------------');

const flight = 'LH234H'
const raj = {
	name: 'Ritu Raj',
	passPort: 7896541698
}

const checKIn = function (flightNum, passenger) {

	flightNum = 'ASIA746'

	passenger.name = 'Mr.' + passenger.name

	if (raj.passPort === 7896541698) {
    console.warn('correct passport');
		
	} else {
		console.warn('wrong passport');
		
	}
}

checKIn(flight, raj) // correct passport

console.log(flight);

console.log(raj); // {name: 'Mr.Ritu Raj', passPort: 7896541698}


// Is the same as doing...

// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
	person.newPassport = Math.trunc(Math.random() * 10000000000)
	console.log(person);
}

newPassport(raj)

checKIn(flight, raj)

///////////

console.log('--------------------------------------------------------')

// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
	const [first, ...other] = str.split(' ')
	return [first.toUpperCase(), ...other].join(' ')
}


// higher order function
const transformer = function (str, fn) {
	console.log(`Original string : ${str}`);
	console.log(`Transformed string : ${fn(str)} by - ${fn.name}`);	
}

transformer('Javascript is the best', oneWord) // callback function
transformer('Javascript is the best', upperFirstWord) // callback function