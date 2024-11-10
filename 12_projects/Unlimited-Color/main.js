const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')

const randomColor = function(){
    const hexValue = "0123456789ABCDEF"
    let color = '#'

    for(let i=0; i<6; i++){
        color += hexValue[Math.floor(Math.random() * 16)]
    }
    return color
}

const startChangeColor = function(){
    function changeBgClr(){
        document.querySelector('body').style.backgroundColor = randomColor();
    }
    intervalId = setInterval(changeBgClr, 1000)
}

const stopChangeColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
