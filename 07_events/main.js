// document.querySelector("#img6").onclick = function(){
//     alert(`img6`)
// }

// Both equal
// document.querySelector("#img6").addEventListener('click', function(){}, false)
// document.querySelector("#img6").addEventListener('click', function(){}) 


const a1 = document.querySelector("#img6").addEventListener('click', function(){
    // alert(`Hi there`);
}) 


// document.querySelector("#img6").addEventListener('click', function(evnt){
    // console.log(evnt);
// }, false) 


// type, timestamp, defaultPrevented, target, toElement, srcElement
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey

// document.querySelector("#images").addEventListener('click', function(evnt){
//     console.log(`clicked inside ul tag`);
// }, false) 

// document.querySelector("#img1").addEventListener('click', function(evnt){
//     console.log(`clicked image 1`);
//     evnt.stopPropagation()
// }, false) 


// document.querySelector('#google').addEventListener('click', function(e){
//     console.log("Google clicker", e);
//     e.stopPropagation()
//     e.preventDefault()
// }, false)



// const li = document.querySelector('#images')

// li.addEventListener('click', function(event){
//     // console.log(event.target.parentNode);
//     let removeLi = event.target.parentNode
//     // removeLi.remove()
//     // removeLi.parentNode.removeChild(removeLi)

    
    
// }, false)



const li = document.querySelector('#images')
li.addEventListener('click', function(event){
    if(event.target.tagName === 'IMG'){
        console.log(event.target.id);
        let removeLi = event.target.parentNode;
        removeLi.remove()
    }
}, false)