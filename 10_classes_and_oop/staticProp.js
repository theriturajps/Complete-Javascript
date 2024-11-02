class user {
  constructor(username) {
    this.username = username
	}
	
  logMe() {
    return `Username : ${this.username}`
	}
	
	static createID() { // static lagane se creation ka method sabko nahi milega
		return `${Math.floor(Math.random() * 1000000) + 1}`
	}
}


const raj = new user("ritu")
// console.log(raj.createID()); // after "static" this will have error




class Teacher extends user {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone", "iphone@i.com")

console.log(iphone.createID()); // not initiate (error)