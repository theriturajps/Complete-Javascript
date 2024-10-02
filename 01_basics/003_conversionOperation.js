let score = "hitesh" // String

// console.log(typeof score); 
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // Number
// console.log(valueInNumber); // NaN


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "hi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber); -> 33
// console.log(typeof stringNumber); -> String

// *********************** Operations ***********************

let value = 3
let negValue = -value
let posValue = +value

// console.log(typeof([negValue, posValue]), [negValue, posValue]);

// console.log(2+2); -> Add 4
// console.log(2-2); -> Sub 0
// console.log(2*2); -> Multiply 4
// console.log(2**3); -> Square 8
// console.log(2/3); -> Divide 2
// console.log(2%3); -> Reminder 2

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3); -> hello hitesh

// console.log("1" + 2); -> 12
// console.log(1 + "2"); -> 12
// console.log("1" + 2 + 2); -> 122
// console.log(1 + 2 + "2"); -> 32

// console.log((3 + 4) * 5 % 3); // -> 2

// console.log(+true);
// console.log(+"m");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// console.log([num1, num2, num3]);

let gameCounter = 100
++gameCounter;
--gameCounter;
// console.log([++gameCounter, --gameCounter]);



let i = 10;
let i1 =+ 1;
i2 =- 1;
console.table([++i, i--, i1, i2, +i, -i]);



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion