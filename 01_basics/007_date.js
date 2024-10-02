console.log("-------------------------------------------------");

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString("en-IN"));
console.log(myDate.toLocaleString("en-US"));
console.log(typeof myDate); // Object

console.log("-------------------------------------------------");

let myCreatedDate1 = new Date(2023, 0, 21)
let myCreatedDate2 = new Date("01-01-2024")
let myCreatedDate3 = new Date("2023-01-14")

console.log(myCreatedDate1.toDateString())
console.log(myCreatedDate2.toDateString())
console.log(myCreatedDate3.toDateString())


console.log("-------------------------------------------------");

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString("en-IN"));

console.log("-------------------------------------------------");


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log("-------------------------------------------------");

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.toJSON());

console.log("-------------------------------------------------");

// `${newDate.getDay()} and the time `

let date_ = newDate.toLocaleString('default', {
    weekday: "long",
    timeZoneName: "longGeneric"
})
console.log(date_);
