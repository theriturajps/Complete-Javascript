///////////////////// DOM Manupulation //////////////////////////////////////////////////////////


let newHead = document.querySelector("h1");

// console.dir(newHead.innerText);

// newHead.innerText = newHead.innerText + " Tutorial"


let htmlBox = document.querySelectorAll(".box");
// console.log(htmlBox[0]);
// htmlBox[0].innerText = "new 1"
// htmlBox[1].innerText = "new 2"
// htmlBox[2].innerText = "new 3"

// console.log(htmlBox[0].innerText);

let i = 1;
for(div of htmlBox){
    // div.innerText = `New ${i}`
    i++;
}

////////////// Attributes 


let __bTn = document.querySelector('button#btnClick');
// console.dir();
// __bTn.style.backgroundColor = 'red';

// let Pagph = document.createElement("p");
// Pagph.innerText = "this is new paragraph made using js."
// console.dir(Pagph);





//-------------------------------------------------------------------------//
// .append -> add in end of the node. (inside)
// .prepend -> add to the start of the node. (inside)
// .before -> add before the node. (outside)
// .after -> add after the node (outside)
// .delete -> to delete the node


let Pagph = document.createElement("p");
Pagph.innerText = "this is new paragraph made using js.";

let newPagph = document.querySelectorAll(".box");
appendPagph = newPagph[2];
// appendPagph.after(Pagph);

/// ---------------------------------------------------////////////

let _btn = document.createElement("button")
_btn.innerText = "Github";
// _btn.style.backgroundColor = "blueviolet";
// _btn.style.color = "azure";
// _btn.style.marginLeft = "0.5em";
// _btn.style.padding = "0.4em";
// _btn.style.borderRadius = "0.4em";
// _btn.style.border = "none";

_btn.classList.add("btn")
btnClick.after(_btn);

// console.log(_btn);

/// ---------------------------------------------------////////////

