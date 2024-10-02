// const userEmail = `h@gmail.com`

const userEmail = ["raj@gmail.com"]

if(userEmail){
    console.log("got email");
    
} else{
    console.log("don't have email");
    
}


if(userEmail.length === 1){
    console.log("got email");
    
} else{
    console.log("don't have email");
    
}

console.log("------------------------------------------------------------------");

// falsy values ->  false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values ->  "0", 'false', " ", [], {}, function(){}


const emptyObj = {} // truthy value

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

console.log("------------------------------------------------------------------");

// Nullish Coalescing Operator (??): null undefined

let valOne;

valOne = 5 ?? 10
console.log(valOne); // 5

valOne = null ?? 10
console.log(valOne); // 10

valOne = undefined ?? 15
console.log(valOne); // 15


console.log("------------------------------------------------------------------");


valOne = null ?? 100 ?? 150
console.log(valOne);

console.log("------------------------------------------------------------------");

// Terniary Operator --> condition ? true : false

const iceTeaPrice = 100

if (iceTeaPrice <= 80){ // ?
    console.log("less than 80");
} else { // :
    console.log("more than 80");   
}

// Or

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
