const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumers.map((num) => num + 10)
console.log(newNum); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


const newNum0 = myNumers.map((num) => {return num + 10})
console.log(newNum0); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


console.log(`------------------------------------------------`);

// Chaining

// const nayaNum = myNumers.map().map().filter()

// const nayaNum = myNumers.map( (num) => num * 10).map( (num) => num + 10)

const nayaNum = myNumers.map( (num) => {
    return num * 10   // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
}).map( (num) => {
    return num + 1    // [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101 ]
}).map( (num) => {
    return num + 100  // [ 111, 121, 131, 141, 151, 161, 171, 181, 191, 201 ]
}).filter( (num) => {
    return num >= 125 // [ 131, 141, 151, 161, 171, 181, 191, 201 ]
})
console.log(nayaNum);


console.log(`-------------- Same as above ---------------------`);


const nayaNum1 = myNumers
                .map( (num) => num * 10 )   // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
                .map( (num) => num + 1 )   // [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101 ]
                .map( (num) => num + 100 ) // [ 111, 121, 131, 141, 151, 161, 171, 181, 191, 201 ]
                .filter( (num) => num >= 125 ) // [ 131, 141, 151, 161, 171, 181, 191, 201 ]

console.log(nayaNum1);