const newHero = ["anu", "raj"]
// console.log(newHero.__proto__.__proto__.__proto__)


/**
 * Array -> Object -> null
 * String -> Object -> null
 * Function -> Object -> null
 */


function multi(num) {
	return num * 5
}

multi.power = 2

// console.log(multi(5))
// console.log(multi.power)
// console.log(multi.prototype)




function createUser(username, score) {
	this.username = username,
	this.score = score
}


createUser.prototype.increment = function () {
	this.score++
}

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`)
}

const chai = new createUser("raj", 67)
const tea = new createUser('anu', 99)

chai.printMe()
tea.printMe()
