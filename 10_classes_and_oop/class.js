// ES6

class User {
	constructor(username, email, password) {
		this.username = username,
		this.email = email,
		this.password = password
	}

	encryptPassword() {
		return `${Math.floor(Math.random() * this.password ) + 1}`
	}

	changeUsername() {
		return `${this.username.toUpperCase()}`
	}

}

const chai = new User('riturajps', 'raj@a.com', 123456789)

console.log(chai.encryptPassword());
console.log(chai.changeUsername())






// Under the scene


/**

 	function User(username, email, password) {
  this.username = username
  this.email = email
  this.password = password
}

User.prototype.encryptPassword = function () {
  return `${Math.floor(Math.random() * this.password) + 1}`
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}

 */

