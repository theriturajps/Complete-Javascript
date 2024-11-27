'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

////////////////////////////////////////////////////////////////////////////////////////////////////////


// XMLHttpRequest (AJAX call)


const renderCountry = function (data) {
  const countries = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(2)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].code
            }</p>
          </div>
        </article>`

  countriesContainer.insertAdjacentHTML('beforebegin', countries)
}


const displayDataNeighbour = function (country) {
  
  // AJAX call country 1
	const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.com/v2/name/${country}`)
  request.send()
	request.addEventListener('load', function () {
    // console.log(this.responseText); // text

    const [data] = JSON.parse(this.responseText)

    // Render country 1
    renderCountry(data)

    // get neighbour country
    const [neighbour] = data.borders

    if (!neighbour) return

    // AJAX call country 2
    const request2 = new XMLHttpRequest()
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
    request2.send()

    request2.addEventListener('load', () => {
      const [data2] = JSON.parse(this.responseText)

      renderCountry(data2, 'neighbour')
      console.log(data2);
    })

  })
}


displayDataNeighbour('portugal')



