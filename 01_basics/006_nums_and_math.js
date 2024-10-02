console.log("-------------------------------------------------");

// Numbers

const score = 400
console.log(typeof score, score);

const balance = new Number(score)
console.log(typeof balance, balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(4));
console.log(balance.toPrecision(8));



console.log("-------------------------------------------------");

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

console.log("-------------------------------------------------");

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US'));

console.log("-------------------------------------------------");

// Maths

console.log(Math);
console.log("Value of PI is :", Math.PI);

console.log(Math.abs(-4)); // Do Positive
console.log(Math.abs(-2)); // Do Positive

console.log("Round off of 4.4 is :", Math.round(4.4));
console.log("Round off of 4.5 is :", Math.round(4.5));


console.log("Celling Value:", Math.ceil(4.2)); // 5
console.log("Floor Value:", Math.floor(4.6)); // 4

console.log("The square of 2 is:", Math.pow(2, 2));

console.log("The cube of 2 is:", Math.pow(2, 3));

console.log("Min value 4, 3, 6, 8 is :", Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log("-------------------------------------------------");

console.log(Math.random());
console.log((Math.random()*10) + 1); // to not to get 0 value
console.log((Math.floor(Math.random()*10) + 1) * 9); // Floor value (without decimal)

console.log("-------------------------------------------------");

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)