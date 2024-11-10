/**

console.log(Math.PI); // 3.141592653589793

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor); // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

 */


const myObj = {
  username: 'raj',
  firstName: 'ritu',
  lastName: 'singh',
	isLoggedIn: false,
	hasImage: function () {
		console.log(`${this.username} has a image`);
		
	}
}


console.log(Object.getOwnPropertyDescriptor(myObj, 'username')) // {value: 'raj', writable: true, enumerable: true, configurable: true}

Object.defineProperty(myObj, 'username', {
  writable: false,
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myObj, 'username')) // {value: 'raj', writable: false, enumerable: false, configurable: true}


// now you can't change the value of the username.


/*

for (let [key, value] of myObj) {
  console.log(`${key} -- ${value}`) // TypeError: myObj is not iterable
}

*/

for (let [key, value] of Object.entries(myObj)) {
	
	if (typeof value !== 'function') {
    console.log(`${key} -- ${value}`)
  /**
		firstName -- ritu
		lastName -- singh
		isLoggedIn -- false 
	*/
  }

	

}