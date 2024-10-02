//  Primitive (Stack Memory) --> 7 types -> String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail;

console.log("-------------------------------------------------");

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
console.log(typeof id, typeof anotherId)

console.log("-------------------------------------------------");


// const bigNumber = 3456543576654356754n

// ------------------------------------------------------------------------------------ //


// Reference (Non primitive) (Heap Memory) --> Array, Objects, Functions

const heros = ["thor", "ironman", "superman"];

let myObj = {
    name: "hitesh",
    age: 22,
}

console.table(heros)
console.table(myObj)
console.log(typeof myObj)
console.log(typeof heros)


console.log("-------------------------------------------------");


const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof anotherId);


console.log("-------------------------------------------------");


const rajFunc = function(a,b) {
    sum = a + b;
    return sum;
}

result = rajFunc(3, 2)
console.log(result);
console.log(typeof rajFunc);


// Memory - 2 types

// Stack -> we get copy of
// Heap -> We get refrence (change in original value)

let myName = "raj"
console.log(myName);

let mySecName = "singh"
mySecName = "kumar"
console.log(mySecName); // kumar


// https://262.ecma-international.org/5.1/#sec-11.4.3