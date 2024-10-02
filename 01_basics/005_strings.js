const myName = "raj "
const repoCount = 119

console.log(myName + repoCount + " Github"); // Outdated

console.log("-------------------------------------------------");

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}.`);
console.log(`Hello my name is ${myName.toUpperCase()} and my repo count is ${repoCount}.`);

console.log("-------------------------------------------------");

const gameName = new String('riturajps-in') // String Declare
console.log(gameName);
console.log(gameName[0], gameName[1], gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.split('-'));

console.log("-------------------------------------------------");

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.bold());

console.log("-------------------------------------------------");

console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

console.log("-------------------------------------------------");

const newString = gameName.substring(0, 4)
console.log(newString);

console.log("-------------------------------------------------");

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   raj    ";
console.log(newStringOne);
console.log(newStringOne.trim());

console.log("-------------------------------------------------");

const url = "https://github.com/theriturajps/repo%20url"

console.log(url.replace('%20', '-'))

console.log(url.includes('ritu'))
console.log(url.includes('retu'))
console.log(url.split('/'));