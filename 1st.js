fullName = "raj singh"
age = 25;
price = 52.99;
isFollow = true;
a = null;
y = undefined;

// console.log(fullName," ", age, " ", price, " ", isFollow, " ", a, " ", y)
// console.log(typeof isFollow)


// Use keyword before variable name -> let,const,var


// don't use 'var' -> used till 2015, ES6(New) -> let & const

let fullName = "ritu raj pratap singh";
let price = 100;
let _age = 25;
// console.log(fullName, price, age)


const myPI = 3.14;
const e = 10.6598;


let a;
a = 4;
// console.log(a)

// {} -> one block (curli braces)
// () -> square braces


///// Datatypes -> Number, String, Boolean, Undefined, Null, BigInt, Symbol

let age = 45;
// console.log(typeof age);


///// Object -> {key:values} -> age:24, name:raj

const student = {
    name: "raj",
    age: 52,
    cgpa: 8.5,
    isPass: true
}
// console.log(student, typeof(student))
// console.log(student["name"])
// console.log(student.name)


student["age"] = student["age"] + 1
// console.log(student["age"])


const amznProduct = {
    name: "Pen",
    rating: 4,
    offer: "50% Off",
    price: '$260'
}
// console.log(amznProduct)




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