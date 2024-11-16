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
  airline: 'EuriWings',
  iataCode: 'EW',
  booking: [],
}

// Does not work
// euroWIngs.book(23, 'Khushi')



// Call Method

const book = airIndia.book 

book.call(euroWIngs, 234, 'Neha')

book.call(airIndia, 897, 'Komal')


//////////////////////////////////////////////////////////////////////////////

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'SWS',
  booking: [],
}

book.call(swiss, 897, 'Rohit') // {name: 'Swiss Airline', iataCode: 'SWS', booking: Array(1)}


// Apply Method

const flightData = [324, 'Neha Rathore']
book.apply(swiss, flightData) // {name: 'Swiss Airline', iataCode: 'SWS', booking: Array(2)}

book.call(swiss, ...flightData) // {name: 'Swiss Airline', iataCode: 'SWS', booking: Array(3)}


// Bind Method

const bookEW = book.bind(euroWIngs)
const bookAI = book.bind(airIndia)
const bookSWS = book.bind(swiss)


bookEW(867, 'Raj Singh')
bookAI(865, 'Raj Singh')
bookSWS(837, 'Raj Singh')


const bookAI498 = book.bind(airIndia, 498)
bookAI498('Shri')
bookAI498('Deva')

///////////////////////////////////////////////////////////////////////////////////////

// with eventListiners

airIndia.planes = 300

airIndia.buyPlane = function () {
	console.log(this)

	this.planes++
	
	console.log(this.planes);
}

// airIndia.buyPlane()

document.querySelector('.buy')
	.addEventListener(
		'click',
		airIndia.buyPlane.bind(
			airIndia
		)
)
	




// Partial Application

const addTax = (rate, value) => value + value * rate

console.log(addTax(0.10, 200)) // 220

const addVat = addTax.bind(null, 0.23)
// addVat = value => value + value * rate

console.log(addVat(100)); // 123




///////////////////////////////////////////////////// Coding Challenge #1


const poll = {
  question: 'What is your favourite programming language?',
	options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
	
	// This generates [0, 0, 0, 0]. More in the next section!
	
  answers: new Array(4).fill(0),

	registerNewAnswer() {
		let answer = Number(
			prompt(
				`${this.question}\n${this.options.join('\n')}\n(Write option number)`
			)
		);

		// Register the answer
		typeof answer === 'number' && answer < this.options.length && this.answers[answer]++
		
	this.displayResults()
	this.displayResults('string')

	},

	displayResults(type = 'array') {
		if (type === 'array') {
			console.log(this.answers);
		} else if (type === 'string') {
			console.log(`Poll results are ${this.answers.join(', ')}`);
		}
	}



}


document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))


poll.displayResults()