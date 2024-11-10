// BMI = weight (kg) ÷ (height (m))2

// BMI = weight (lb) ÷ (height (inches)) 2 × 703

const form = document.querySelector('form');

form.addEventListener('submit', function (thor) {
    thor.preventDefault()

    // click karte value lena hai eseliye andar likha
    const userHeight = parseInt(document.querySelector('#bmiHeight').value);
    const userWeight = parseInt(document.querySelector('#bmiWeight').value);
    const result = document.querySelector('#bmiStatus');

    if(userHeight === '' || userHeight < 0 || isNaN(userHeight)){
        result.innerHTML = `Please enter a valid height in cm.`;
    } else if(userWeight === '' || userWeight < 0 || isNaN(userWeight)){
        result.innerHTML = `Please enter a valid weight in kg.`;
    } else {
        const bmi = (userWeight / ((userHeight * userHeight) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
    }
})