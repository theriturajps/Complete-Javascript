'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// lyfecycle => pending -> settled -> fullfilled (success) or rejected (error)



// Consuming Promises
/*
const getCntData = function (country) {
  const api = `https://restcountries.com/v2/name/${country}`
  const request = fetch(api)
    .then((response) => response.json())
    .then(([data]) => console.log(data))
}
getCntData('portugal')
*/

////////////////////////////////////////// Chaining Promises //////////////////////////////////////////////////////////////

// Chaining Promises

/*
const getCntData = function (country) {
  const api = `https://restcountries.com/v2/name/`
  const request = fetch(api + `${country}`)
    .then((response) => response.json())
    .then((data) => {
      const neighbour = data[0].borders[0]
      if (neighbour) {
        const neighbourData = fetch(api + `${neighbour}`)
          .then((response) => response.json())
          .then((data) => console.log(data))
      } else {
        console.log(`Border Not Available : 404`);
      }
    })
}

getCntData('portugal')
*/



const getCntData = function (country) {
  const api = `https://restcountries.com/v2/name/`
  const request = fetch(api + `${country}`)
    .then((response) => response.json())
    .then((data) => {
      const neighbour = data[0].borders[0]
      if (!neighbour) return
      return fetch(api + `${neighbour}`)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}

// getCntData('usa')


/////////////////////////////////////////// error handling /////////////////////////////////////////////////////////////


const getCntData2 = function (country) {
  const api = `https://restcountries.com/v2/name/`
  const request = fetch(api + `${country}`)
    .then(
      (response) => response.json()
      // (error) => alert(error) // Error ----------> Not Good Way
    )
    .then((data) => {
      const neighbour = data[0].borders[0]
      if (!neighbour) return
      return fetch(api + `${neighbour}`)
    })
    .then(
      (response) => response.json()
      // (error) => alert(error) // Error ----------> Not Good Way
    )
    .then((data) => console.log(data))
    .catch((error) => console.error(`${error.message} 😒😒😒`)) // Global Error ----------> Good Way) 
    .finally(() => console.log(`Welcome`)) // this will be called always
}

// btn.addEventListener('click', () => {
//   getCntData2('usa')
// })

//////////////////////////// throw error manually //////////////////////////////////

const getCntData3 = function (country) {
  const api = `https://restcountries.com/v2/name/`
  const request = fetch(api + `${country}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country name (Not Found) Incorect! : ${Number(response.status)}`)
      return response.json()
    })
    .then((data) => {
      // const neighbour = data[0].borders[0]
      const neighbour = `sdfjskslsa`
      if (!neighbour) return
      return fetch(api + `${neighbour}`)
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Neighbour name (Not Found) Incorect! : ${Number(response.status)}`)
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(`${error.message} 😒😒😒`)) // Global Error ----------> Good Way)
    .finally(() => console.log(`Welcome`)) // this will be called always
}

// btn.addEventListener('click', () => {
//   getCntData3('usa')
// })


//////////////////////////// Optimised Way //////////////////////////////////
