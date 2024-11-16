'use strict'


const secureBooking = function () {
	let passengerCount = 0;

	return function () {
		passengerCount++
		console.log(passengerCount);
	}
}

const booker = secureBooking()

booker() // 1
booker() // 2
booker() // 3

console.dir(booker)

console.log(`---------------------------------------------------------`);

let f; // global scope

const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	}
}

const h = function () {
	const b = 777;
	f = function () {
		console.log(b * 2);
	}
}

g()
f() // 46

// re-assigning f function
h()
f() // 1554



///////////////////////////////////////////////////////////////////////////


const change = function () {
	const header = document.querySelector('#h1')
	
	document.querySelector('body').addEventListener('click', function () {
		header.style.color = 'white'
	})
}

change()