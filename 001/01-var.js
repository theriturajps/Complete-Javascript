console.log("Hi, its ritu raj") // run:  node 001/01-var.js

const accID = 25

let accEml = "iamriturajps@gmail.com"

var accPass = "123456" /* Don't prefare "var" in js, issue in block scope and functional scope */

accCity = "Patna"

let accBal; // if run only this ==> undefined
accBal = 25

console.log(accID) 
console.log(accCity)
console.log([accEml, accID])
console.table([accID, accEml, accPass, accCity])

console.log(accBal)