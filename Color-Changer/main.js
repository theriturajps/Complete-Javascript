const body = document.querySelector('body')
const btns = document.querySelectorAll('.button')

// Method 1

// btns.forEach( function (button) {
//     button.addEventListener('click', function (evnt) {
//         body.style.backgroundColor = evnt.target.id
//     })
// })


// Method 2
btns.forEach( function (button) {
    button.addEventListener('mouseover', function (evnt) {
        if(evnt.target.id === 'grey'){
            body.style.backgroundColor = "grey"
        } else if(evnt.target.id === 'white'){
            body.style.backgroundColor = "white"
        } else if(evnt.target.id === 'blue'){
            body.style.backgroundColor = "blue"
        } else if(evnt.target.id === 'yellow'){
            body.style.backgroundColor = "yellow"
        } else {
            body.style.backgroundColor = "red"
        }
    })
})

