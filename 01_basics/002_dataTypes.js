"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3) // code readability should be high

console.warn("warn")

console.info("Info")

console.log("Hitesh")

// ---------------------------------------------------------------------------- //

let name = "hitesh"
let age = 18
let isLoggedIn = false //boolean

let state;
state = "Bihar"

console.table([name, isLoggedIn, age, state]);

// ---------------------------------------------------------------------------- //


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// ---------------------------------------------------------------------------- //

// object

console.table(typeof [name, isLoggedIn, age, state]); // Object
console.log(typeof undefined); // undefined
console.log(typeof null); // object