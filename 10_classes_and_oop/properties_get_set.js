function User(email, pass) {
	this._email = email,
	this._pass = pass
	
	Object.defineProperty(this, 'email', {
		get: function () {
			return this._email.toUpperCase()
		},
		set: function () {
			this.email = value
		}
	})

	Object.defineProperty(this, 'pass', {
    get: function () {
      return this._pass.toUpperCase()
    },
    set: function () {
      this.pass = value
    },
  })

}


const raj = new User("chai@g.com", 'cahi')

console.log(raj.email); // CHAI@G.COM