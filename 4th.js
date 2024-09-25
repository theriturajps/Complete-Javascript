//////////////// String ///////////////////////////////

// let str = "raj";
// let str2 = 'raj';

// property -> str.length, str[1]


/////////////// Template Laterals //////////////////////////

// let myStn = 'hi this is raj';

/* let Obj = {
    item: "pen",
    cost: 50
}
console.log("the cost of", Obj.item, "is", Obj.cost);
console.log(`the ${Obj.item} has amount of ${Obj.cost}`) // template (placeholder)
 */


////////// (\n, \t) ///////////////////////
/* let Obj = {
    item: "pen",
    cost: 50
}
console.log(`the ${Obj.item} has \namount of ${Obj.cost}`) */


// Method -> str.toUpperCase(), str.toLowerCase(), str.trim(), str.slice(start, end?), str.concat(str2), str.replace( searchVal, newValue), str.charAt(idx)


let str = "Raj Singh";
let str2 = " Rajput"
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(1,5));

console.log(str.concat(str2));
console.log(str.replace("R", "T"));
console.log(str.replaceAll("R", "T"));
console.log(str.charAt(4));
