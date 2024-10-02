const myArr = [0, 1, 2, 3, 4, 5] // Number
const myHeors = ["iron man", "thor", "super man", "saktiman", "captain america", true, false, 0, 1, 9] // Combination Array
const numArray = new Array(1, 2, 3, 4)


console.log(myArr, "the lenght is :", myArr.length);
console.log(myHeors, "the lenght is :", myHeors.length);
console.log(numArray, "the lenght is :", numArray.length);

console.log(myArr[1], myHeors[2], myHeors[5], myHeors[7] ,numArray[3]);

console.log("--------------------Array Methods------------------------");

myArr.push(6); console.log(myArr); // Insert 6
myHeors.push("raj"); console.log(myHeors); // Insert 'raj'
numArray.push(5); console.log(numArray); // insert 5

myArr.pop() // remove last array
console.log(myArr); 

console.log("-------------------------------------------------");

myArr.unshift(99) // Insert 99
console.log(myArr);

myArr.shift() // Remove 99
console.log(myArr);

console.log("-------------------------------------------------");

let sayAns = myArr.includes(9) // Is there '9' in the array in myArr.
console.log(sayAns); 

let tellIndx = myHeors.indexOf("super man") // Show the index[] of the arrays.
console.log(tellIndx);

console.log("-------------------------------------------------");

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

console.log("------------------Slice, Splice-------------------------");

console.log("myA1", myArr);
let myA1 = myArr.slice(1, 2) // 1 ko include karna aour 2 index se include nahi karna hai mtlb sirf 1 index ko he show karo
console.log(myA1);

console.log("myA2", myHeors);
let myA2 = myHeors.slice(1, 5) // 1 ko include karna aour 2 index se include nahi karna hai
console.log(myA2);

console.log("myA3", numArray); // [ 1, 2, 3, 4, 5 ]
let myA3 = numArray.splice(1, 5) // [ 2, 3, 4, 5 ]
console.log(myA3);