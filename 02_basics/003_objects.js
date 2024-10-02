console.log("-------------------- singleton ----------------------------");

const mySym = Symbol("key1")

const theUser = {
    name: "Ritu Raj",
    "Full Name": "Ritu Raj Pratap Singh", // can't get the value using dot method
    email: "iamriturajps@gmail.com",
    passwd: "***************",
    [mySym]: "myKey1", // Symbol
    phn: 9876543210,
    isAdmin: false,
    isLoggedIn: false,
    isMod: true,
    loggedInDays: [
        "Monday",
        "Thrusday",
        "Friday"
    ],
    locAddrs: "Patna",
    age: 19
}


console.log(theUser.name, theUser.email, theUser.loggedInDays[1]); // Not correct way
console.log(theUser["email"]); // Use this also
console.log(theUser["Full Name"]); // use square method
console.log(typeof(theUser[mySym]), theUser[mySym]); // Symbol

theUser.email = "raj@chatgpt.com" // To change the email
// Object.freeze(theUser) // To freeze the theUser
console.log(theUser);

theUser.email = "raj@google.com" // Now it will not assign the email to the object because it is freezed above.
console.log(theUser);

console.log("------------------ Function add inside Object -----------------------------");

theUser.greetUser = function() {
    console.log("Hello JS user");
}
console.log(theUser.greetUser());


theUser.greetTheUser = function () {
    console.log(`Hello ${this["Full Name"]}, your password is ${this.passwd}`);   
}
console.log(theUser.greetTheUser());
