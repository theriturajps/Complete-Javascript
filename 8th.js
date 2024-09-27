////////////////////////////// Events //////////////////////////////

// onclick="console.log('Someone clicked')" -> onclick is and event

// onclick, ondblclick, onmousehover, etc.............

////////////////////////////// Event handling 

let btnClick = document.querySelector("#btnClick");
// btnClick.onclick = () => {
//     console.log("hey this btn was clicked :))");
// }


////////////////////////////// Event Object
 
btnClick.onclick = (myEvent) => {
    // console.log(myEvent);
    // console.log(myEvent.clientX);
    // console.log(myEvent.clientY);
    // console.log(myEvent.type);
    // console.log(myEvent.target);
}



////////////////////////////// Event Listeners -> node.addEventListener(event, callback) & node.removeEventListener(event, callback)



btnClick.addEventListener("click", () => {
    // console.log("button is clicked");
})

///////////////////////////// Light|Dark Mode

let modeBtn = document.querySelector("#btnClick");

let defltColor = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if (defltColor === "light"){
        defltColor = "dark";
    } else {
        defltColor = "light";
    }
    console.log(defltColor);
})

// console.log(modeBtn);
