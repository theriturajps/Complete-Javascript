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

let modeBtn = document.querySelector(".btn");
let body = document.querySelector("body");
let defltColor = "light"; // dark

modeBtn.addEventListener("click", (evnt) => {
    if (defltColor === "light"){
        defltColor = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        defltColor = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    // console.log(defltColor);
});

// console.log(modeBtn);
