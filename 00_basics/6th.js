//////////////// Functions //////////////////////////////////////

"xyz".toUpperCase();
"xyz".toLowerCase();


///////// Function Defination

/* function funcName(){
    console.log();
}
function funcName(param1, param2){
    console.log();
}

///////// Function Call

funcName(); */


//////////////////////////////// Work ///////////////////////////////////

function riturajps(){
    console.log("Hi, this is riturajps function")
}

// riturajps();




function __ritu(msg, num){ // parameter -> input
    console.log(msg + num);
}

// __ritu("hi this is parameter message", 100); // argument




function __sum(num1, num2){
    sum = num1 + num2;
    return sum;
}

let val = __sum(2,3);
// console.log(val);





//////////////// Arrow Function


function __sum(num1, num2){
    return num1 + num2;
}

function __multi(num1, num2){
    return num1 * num2;
}


const arrowSum = (a,b) => {
    console.log(a + b);
}
// arrowSum(2,5);

const arrowMulti = (a, b) => {
    console.log(a * b);
}
// arrowMulti(2, 3);

function countVowl1(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}
// countVowl1("ritu");


let countVowl2 = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}
// countVowl2("ritu");






//////////////// forEach Loop in Arrays

let state = ["bihar", "delhi", "mumbai"]

state.forEach((stateValue) => {
    // console.log(stateValue)
});

state.forEach((stateValue, stateIndex) => {
    // console.log(stateValue, stateIndex)
});




// Square of an array

let numArray = [11,111,1111,11111,111111,1111111];
numArray.forEach((num) => {
    // console.log(num * num);
})





//////////////// Map method in Arrays

let numMap = [6,5,8,7]

numMap.map((valueNum) => {
    // console.log(valueNum);
});


let num2Map = numMap.map((valueNum) => {
    return valueNum;
});
// console.log(num2Map);









//////////////// Filter method in Arrays

let filtArray = [2,66, 51, 88, 99]

let newFiltArray = filtArray.filter((filtArrayValue) => {
    return filtArrayValue % 2 === 0;
});

// console.log(newFiltArray);







