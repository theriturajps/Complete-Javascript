var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);   
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ritu"

    function two(){
        const website = "website"
        console.log(username);
    }
    // console.log(website);

    two() // two exec -> ritu
}

one() // one ecec



console.log("------------------------------------------------------------");



if (true) {
    const username = "ritu"
    if (username === "ritu") {
        const website = " website"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log("-----++++++++++++++++++ interesting ++++++++++++++++++-------");


console.log(addone(5)) // No Error
function addone(num){
    return num + 1
}


console.log(addTwo(5)); // Error because holding in addTwo
const addTwo = function(num){
    return num + 2
}

