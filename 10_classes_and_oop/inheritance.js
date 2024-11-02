// const User = {
// 	name: 'chai',
// 	email: 'chai@google.com'
// }

// const teacher = {
// 	makeVideo: true
// }

// const teaching = {
//   isAvailable: false,
// }

// const TASupport = {
// 	fullTime: true,
// 	makeAssihnment: 'JS',
// 	__proto__: TeachingSupport
// }

// Teacher.__proto__ = User


// Object.setPrototypeOf(TeachingSupport, Teacher)


////////////////////////////////////////////////////////////////////////////////////////////


class uniqueName{
	constructor(username) {
		this.username = username
	}
	logMe() {
		return `Username is ${this.username}`
	}
}

class Teacher extends uniqueName {
	constructor(username, email, password) {
		super(username)
		this.email = email,
		this.password = password
	}
	addCourse() {
		return `A new course is added by ${this.username}`
	}

}


const chai = new Teacher("neha", "neha@g.com", 123)

console.log(chai);
console.log(chai.addCourse());
console.log(chai.logMe())


const masalaChai = new uniqueName("riturajps")
console.log(masalaChai);
console.log(masalaChai.logMe())
console.log(chai instanceof Teacher); // true
console.log(masalaChai.addCourse()) // not associated with masalachai

