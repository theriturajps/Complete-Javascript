let myname = "raj singh   "
// console.log(myname.length);  // 9
// console.log(myname.truelength);
// console.log(myname.trim()); // raj singh
// console.log(myname.trim().length); // 9



/**
 * create a method jo sabhi string ka true length den
 */

// Using Inheritance 


String.prototype.trueLength = function () {
  console.log(`${this}`) // raj singh
  console.log(`${this.myname}`)
  console.log(`the true length is ${this.trim().length}`)
}

myname.trueLength() // the true length is 9
"ritu ".trueLength()






let myHero = ["thor", "hulk", "ironman"] // Array








let heroPower = { // Object
	thor: "hammer",
	hulk: "energy",
	ironman: "brain",

	getThorPower: function () {
		return `thor power is ${this.thor}`
	}
}






Object.prototype.thorPower = function () { // global level me power dedi
	console.log("Present in all object"); 
}

Array.prototype.thor = function () {
  console.log('array has prototype')
}


heroPower.thorPower() // Top level
myHero.thorPower() // Top level
myHero.thor() // Array level