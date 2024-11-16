'use strict'

/////////// Default parameters

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

/////////// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
	const [first, ...other] = str.split(' ')
	return [first.toUpperCase(), ...other].join(' ')
}


/////////// higher order function
const transformer = function (str, fn) {
	console.log(`Original string : ${str}`);
	console.log(`Transformed string : ${fn(str)} by - ${fn.name}`);	
}

transformer('Javascript is the best', oneWord) // callback function
transformer('Javascript is the best', upperFirstWord) // callback function



/////////// Function returning Function

const greet = (greeting) => {
	return (name) => {
		console.log(`${greeting} - ${name}`);
	}
}

const greetFnc = greet('Hi')

greetFnc('Raj') // Hi - Raj
greet('Hi')('Raj') // Hi - Raj



/////////// Arrow Way

const greetArr = (greeting) => (name) => console.log(`${greeting} - ${name}`)
greetArr('Hi')('Raj') // Hi - Raj


/////////// The call and apply methods


const airIndia = {
	airline: 'Air india',
	iataCode: 'AI',
	booking: [],

	book: function (flightNum, name) {
		console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} - ${flightNum}`);
		this.booking.push({
      flight: `${this.iataCode}${flightNum}`,
			passName: name,
		})
	}

}


airIndia.book('243', 'Ritu')
airIndia.book('567', 'Ram')
airIndia.book('123', 'Neha')

//////////////////////////////////////////////////////////////////////////////

// const book = airIndia.book


// const euroWIngs = {
// 	name: 'EuriWings',
// 	iataCode: 'EW',
// 	booking: [],
// 	book
// }


// euroWIngs.book(23, 'Khushi')

//////////////////////////////////////////////////////////////////////////////

const euroWIngs = {
	name: 'EuriWings',
	iataCode: 'EW',
	booking: []
}

// Does not work
// euroWIngs.book(23, 'Khushi')

const book = airIndia.book

book.call(euroWIngs, 234, 'Neha') // call apply bind

book.call(airIndia, 897, 'Komal')