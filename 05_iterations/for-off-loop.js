// for of Loop

console.log(`--------------------------------------------------`);

// ["", "", ""] -> array ke andar string
// [{}, {}, {}] -> array ke andar object

const arrOne = [1, 2, 3, 4, 5]
for (const numValue of arrOne) {
    console.log(numValue);
}



const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(greet);
}

console.log(`--------------------------------------------------`);

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('BHU', "Bhuttan")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

console.log(`--------------------------------------------------`);

// Not worked

const gameArr = {
    game1: 'NFS',
    game2: 'GTA',
    game3: 'Cyberpunk',
    game4: 'BGMI',
    game5: 'FAU-G'
}

for (const [key, value] of gameArr) {
    console.log(key, `+`, value);
}
console.log(`--------------------------------------------------`);