// Javascript and Classes

/* 

Object -> collection of properties and mwthods

******** Object literal ********

-> Constructor function ("new")
-> Prototype
-> classes
-> instances (new, this, etc....)


******** 4 pillars ********

-> Abstraction
-> encapsulation
-> inheritance
-> Polymorphism

*/




// Object literal

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () { // called Method
        // console.log(this)
        return `Hey this is ${this.username} and your logincount is ${this.loginCount} and you are curently ${this.signedIn}`
    }

}

// console.log(user.getUserDetails());

function userData(username, loginCount, isLoggedIn) {
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  this.greeting = function () {
    console.log(`Welcome ${this.username}`)
  }

  return this // not mandatory (default)
}

const userOne = new userData('raj', 2, true) // new due to dupplicate content
const userTwo = new userData('anu', 5, false) // new due to dupplicate content

/* new -> made new object and pass into this */

console.log(userOne)

console.log(userOne.constructor); // [Function: userData] -> refrence of its own

console.log(userTwo);
