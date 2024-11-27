'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

////////////////////////////////////////////////////////////////////////////////////////////////////////


// XMLHttpRequest (AJAX call)




const displayData = function (country) {
	const apiURL = `https://restcountries.com/v2/name/${country}`

	const request = new XMLHttpRequest()

  request.open('GET', apiURL)
  request.send()
	request.addEventListener('load', function () {
		
    // console.log(this.responseText); // text

    const data = JSON.parse(this.responseText)

    console.log(data[1])

    const countries = `<article class="country">
          <img class="country__img" src="${data[1].flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data[1].name}</h3>
            <h4 class="country__region">${data[1].region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data[1].population / 10000000
            ).toFixed(2)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              data[1].languages[0].name
            } and ${data[1].languages[1].name}</p>
            <p class="country__row"><span>💰</span>${
              data[1].currencies[0].code
            } : ${data[1].currencies[0].name}</p>
          </div>
        </article>`

    countriesContainer.insertAdjacentHTML('beforebegin', countries)
  })
}


displayData('India')