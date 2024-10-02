console.log("-------------------------------------------------------");

const marHero = ["thor", "Ironman", "spiderman", "ritu raj"];
const dcHero = ["superman", "flash", "batman"];


marHero.push(dcHero);

console.log(marHero);
console.log(marHero[4][0]);

console.log("-------------------- Concat -----------------------------");

const allHeros = marHero.concat(dcHero)
console.log(allHeros);

console.log("------------------ Spread --------------------------------");

const newHrro = [...marHero, ...dcHero] // (...array_name) alternate method to concat the arrays.
console.log(newHrro);



console.log("-------------------------------------------------------");

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // Combine infinite array in single array.
console.log(realAnotherArray);


console.log("-------------------------------------------------------");

console.log(Array.isArray("Ritu Raj")) // Ask Question is that array
console.log(Array.from("Ritu Raj")) // Convert this to array.
console.log(Array.from({name: "Ritu Raj"})) // interesting Case


console.log("-------------------------------------------------------");

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));