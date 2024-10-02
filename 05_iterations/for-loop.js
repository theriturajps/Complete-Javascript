// for
console.log("---------------------- For Loop -----------------------------");

// i=0; -> 1. initialize
// i<=10; -> 2. condition check (true)
// console.log(inc); -> 3. execute
// i++ -> 4. increase

for(let i=0; i<=10; i++){
    const inc = i;
    if(i == 5){
        console.log("5 is a number");
    }
    console.log(inc);
}

console.log("-------------------------------------------------------------");

for (let a = 0; a <= 10; a++) {
    console.log(`Table of ${a}`);

    for (let b=0; b <= 10; b++) {
        // console.log(`Inner Loop ${b} and ${a}`);
        // console.log(a + '*' + b + '=' + a * b);
    }
}


console.log("-------------------------------------------------------------");

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


console.log("------------------- break and continue ----------------------------");
// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // break hoke bahar aajayega
    }
   console.log(`Value of i is ${index}`);
}

console.log("------------------------------------------------------------");

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // continiue hote jayega ignore karke
    }
   console.log(`Value of i is ${index}`);
}