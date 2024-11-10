class User {
	constructor(email, password) {
		this.email = email,
		this.password = password
	}

	// same for email

	get password() {
		return `${this.pass.toUpperCase()}raj`
	}

	set password(value) {
		this.pass = value // setter ko return nahi karte hain
	}
}

const raj = new User("raj@gmail.com", "abc")

console.log(raj.password);
