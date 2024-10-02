console.log("----------------- Function ------------------------");

function functionName() {
    console.log(`Function Example`)
}
functionName()


console.log("----------------- Function to add Num ------------------------");

function add1(num1, num2){ // "num1, num2" is parameters
    let sum = num1 + num2;
    return sum;
}
const sum = add1(6,6); // "6,6" is arguments
console.log(sum);





function add2(num1, num2){ // "num1, num2" is parameters
    return num1 + num2;
}
const sum3 = add2(2,6); // "6,6" is arguments
console.log(sum3);





function addNum(num1, num2){ // "num1, num2" is parameters
    let sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
addNum(3,2);




console.log("---------------------------------------------------");

function loginUserMessage (username){
    return `Welcome ${username}!`
}
console.log(loginUserMessage("Raj"));


// function loginUserMessage (username){
//     if(username === undefined){
//         console.log("Please Enter the Username!")
//         return
//     }
//     return `Welcome ${username}!`
// }
// console.log(loginUserMessage());

// function loginUserMessage (username){
//     if(!username){
//         console.log("Please Enter the Username!")
//         return
//     }
//     return `Welcome ${username}!`
// }
// console.log(loginUserMessage());

function loginUserMessage (username = "NoTa"){
    if(!username){
        console.log("Please Enter the Username!")
        return
    }
    return `Welcome ${username}!`
}
console.log(loginUserMessage());


function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(200));



function calculateCartPrice1(...num2) { // "...num2" rest operator
    return num2
}
console.log(calculateCartPrice1(200, 300, 400));


function calculateCartPrice2(val1, val2, ...num2) { // "...num2" rest operator
    return num2
}
console.log(calculateCartPrice2(200, 300, 400, 300, 100, 50, 99));



console.log("---------------------------------------------------");

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));