/////////////// Arrays ////////////////////////////////////////////

let studName = ["raj", "aman", "rohit", "tinku", "rahul"];
let studRoll = [23, 45, 56, 54, 98]

// console.log(studName.length);



//////// Array Indices

// console.log(studName[0]);
// console.log(studRoll[2]);

//// ------------------------- //
studRoll[2] = 66;
// console.log(studRoll);
//// ------------------------- //



for (let i = 0; i < studRoll.length; i++) {
    // console.log(studRoll[i])
}


for (let el of studName) {
   // console.log(el); 
}


let marks = [85, 97, 44, 37, 76, 60]
let sum = 0;
let avg;

for (const val of marks) {
    sum = sum + val; // sum += val
    avg = sum / marks.length;
}
// console.log(`the average of ${marks} is ${avg}`);

let items = [250, 645, 300, 900, 50]
let i = 0;

for (let val of items) {
    // console.log(`this is pre ${items[i]}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    // console.log(items[i]);
    i++;
}



////////////// Array Methods -> Push(), Pop(), toString(), Concat(), unshift(), shift(), Slice(), Splice()

// Push() -> add to end in array
// Pop() -> delete to end in array

let __veg = ["carrot", "pee", "tomato", "potato", "karela"]
__veg.push("cucumber")
__veg.pop()

// console.log(__veg);
// console.log(__veg.toString());

let marvelHeroes = ["iron man", "ant man", "captain america", "thor", "hulk", "the marvel"]
// console.log(marvelHeroes)
// marvelHeroes.splice(2,2,"raj", "mahavir")
// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1, 3));


let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numArray)

numArray.splice(2, 2, 66, 55);
// console.log(numArray);

