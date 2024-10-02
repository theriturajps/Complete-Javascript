// if

// if(condition){ } // if(true){ } -> condition honi chaiye true tab andar ka execute hoga.

if(true){
    // exec hoga
}

if(false){
    // exec nahi hoga
}


const userLoggedIn = true

if(userLoggedIn){
    console.log("Welcome");
}

// Condition Expresion -> <, >, <=, >=, ==, !=, ===, !==

if (2 < 3){
    console.log("True 2 < 3"); // hn chotta hai
} else{
    console.log("False")
}


if (2 > 3){
    console.log("True"); 
} else{
    console.log("False 2 > 3") // nahi badda hai
}


if (2 <= 3){
    console.log("True 2 <= 3"); // hn chotta hai lekin barabar nahi hai (true)
} else{
    console.log("False")
}


if (2 >= 3){
    console.log("True"); 
} else{
    console.log("False 2 >= 3") // nahi badda nahi hai aour barabar bhi nahi hai
}


if (3 != 2){
    console.log("True 3 != 2"); // 3 jo hai 2 ke barabar nahi hai (true)
} else{
    console.log("False")
}


if (2 === "2"){
    console.log("True"); 
} else{
    console.log(`False 2 === "2"`) // value ke sath bhi datatype bhi same hona chaiye
}


if (2 !== 3){
    console.log("True 2 !== 3"); // hn equal nahi hai
} else{
    console.log("False")
}

console.log(`---------------------------------------------------------`);






const temp = 48;
if(temp < 50){
    console.log("less than 50");
} else{
    console.log("greater than 50");
}

const temp2 = 48
if(temp2 === 48){
    console.log("less than 50");
} else{
    console.log("greater than 50");
}

const score =  200;
if (score > 100){
    const power  = "fly"
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); // Error (undefined) because ye global scope hai


console.log(`---------------------------------------------------------`);

const bankBalance = 1000

if(bankBalance > 500) console.log("Amir ho"),
console.log("Good");

if(bankBalance < 500){
    console.log("less than");

} else if (bankBalance < 750) {
    console.log("less than 750");

} else if (bankBalance < 900) {
    console.log("less than 750");

} else {
    console.log("less than 1200");
}

console.log(`---------------------------------------------------------`);

const userLogged = true
const userDebitCard = true
const userLoggedFromEmail = false
const userLoggedFromGithub = true


if (userLogged && userDebitCard){ // && left and write true aana chaiye
    console.log("Buy the course");
}

if (userLogged && userDebitCard && 2==3){ // && left and write true aana chaiye (sabhi true aana chaiye)
    console.log("Buy the course");
} else {
    console.log("Not Buy the course");
}

if (userLoggedFromEmail || userLoggedFromGithub){
    console.log("Good to go");
}


