// Declare Object as Singleton or Constructor

console.log("-------------------------------------------------------------");

// const tinderUser1 = new Object(); console.log(tinderUser1); // -> Singleton Object

const tinderUser = {} // -> Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Ritu Raj"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: "123abc", name: "Ritu Raj", isLoggedIn: false }

console.log("-------------------------------------------------------------");

const instaUser = {
    email: "abc@gmail.com",
    name: {
        userName: {
            isOnline: true,
            isPrivate: false
        },
        fullName: "Ritu Raj Pratap Singh",
        surName: "Singh"
    },
    age: 19,
    bio: "Go to heaven if not go to hell"
}

console.log(instaUser);
console.log(instaUser.email);
console.log(instaUser.name.userName.isOnline);
console.log(instaUser.name.userName.isPrivate);
console.log(instaUser.name.fullName);

console.log("------------------- Merge Object ---------------------------");


let obj1 = {1:"a", 2:"b"}

let obj2 = {3:"a", 4:"b"}


let obj3 = {obj1, obj2}; console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2); console.log(obj4); // { 1: "a", 2: "b", 3: "a", 4: "b" }
const obj5 = Object.assign({}, obj1, obj2); console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Use Spread Method to Merge
const obj6 = {...obj1, ...obj2}; console.log(obj6); // { 1: "a", 2: "b", 3: "a", 4: "b" }

console.log("----------------------- Objects inside Arrays -------------------------------");

let user = [
    {
        id: 1,
        email: "a@g.com"
    },{
        id: 2,
        email: "b@g.com"
    },{
        id: 3,
        email: "c@g.com"
    }
]
console.log(user);


console.log("----------------------- Loops on Array -------------------------------");


console.log(Object.keys(instaUser)); // [ "email", "name", "age", "bio" ]
console.log(Object.values(instaUser)); // [ "abc@gmail.com", {…}, 19, "Go to heaven if not go to hell" ]

console.log(Object.keys(tinderUser)); // [ "id", "name", "isLoggedIn" ]
console.log(Object.values(tinderUser)); // [ "123abc", "Ritu Raj", false ]

console.log(Object.keys(tinderUser.id)); // [ "0", "1", "2", "3", "4", "5" ]
console.log(Object.values(tinderUser.id)); // [ "1", "2", "3", "a", "b", "c" ]

console.log(Object.keys(instaUser.name)); // [ "userName", "fullName", "surName" ]
console.log(Object.values(instaUser.name)); // [ {…}, "Ritu Raj Pratap Singh", "Singh" ]

console.log(Object.keys(instaUser.name.userName)); // [ "isOnline", "isPrivate" ]
console.log(Object.values(instaUser.name.userName)); // [ true, false ]
console.log(Object.entries(instaUser.name.userName));


console.log("------------------ Find the Property ----------------------");

console.log(instaUser.hasOwnProperty('email'));
console.log(instaUser.name.userName.hasOwnProperty('isOnline'));

console.log("-------------------------------------------------");

// Objects Views

const course = {
    courseName: "Javascript",
    price: "$99",
    courseInstructor: "raj"
}

// course.courseInstructor = "rohit" 
// console.log(course.courseInstructor);


const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);


console.log("-------------------------------------------------------------");

const randomUser = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Armando",
        "last": "Alemán"
      },
      "location": {
        "street": {
          "number": 4562,
          "name": "Boulevard Sur Salazar"
        },
        "city": "Almoloya de Alquisiras",
        "state": "Chiapas",
        "country": "Mexico",
        "postcode": 45482,
        "coordinates": {
          "latitude": "26.0365",
          "longitude": "-51.5123"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "armando.aleman@example.com",
      "login": {
        "uuid": "10872026-b019-4c87-8fa5-f865d7b58460",
        "username": "redfrog988",
        "password": "versace",
        "salt": "SbhJVIDY",
        "md5": "82c3dc74164866b5bc63d95f8298dbb7",
        "sha1": "556eedfa0ade04d24e20c2da4b34bfb27e9931b6",
        "sha256": "5e092c02eb40d5f1d6bf5c2314cc7f1b1a353335d1597a1b3e1108f5f8a45191"
      },
      "dob": {
        "date": "1975-09-16T10:56:06.236Z",
        "age": 49
      },
      "registered": {
        "date": "2009-12-30T00:27:56.743Z",
        "age": 14
      },
      "phone": "(684) 635 2400",
      "cell": "(661) 007 6708",
      "id": {
        "name": "NSS",
        "value": "47 86 79 1140 7"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      },
      "nat": "MX"
    }
  ],
  "info": {
    "seed": "f226a25d49b824b4",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

