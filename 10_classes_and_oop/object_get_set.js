const User = {
  _email: 'raj@g.com',
  _pass: '456123asd',

	// main nahi chahta ki koi bhi directly ye value ko access kar le.
	
	get email() {
		return this._email.toUpperCase()
	},

	set email(value) {
		this._email = value
	}
}

const raj = Object.create(User)

console.log(raj.email); // RAJ@G.COM