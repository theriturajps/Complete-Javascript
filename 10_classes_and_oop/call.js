function setUsername(username) {
	// Complex DB call

	this.username = username
	console.log("called");
}

function createUser(username, email, pass) {
	setUsername.call(this, username),

	this.email = email,
	this.password = pass
}


const chai = new createUser("raj", "raj@g.com", 123)
console.log(chai);