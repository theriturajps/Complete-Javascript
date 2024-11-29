'use strict'

const btn = document.querySelector('.btn-country')
const output = document.querySelector('.output')

/*
const lotteryPromise = new Promise(function (resolve, reject) {
	console.log(`LOADING ........`);
	setTimeout(() => {
		if (Math.random() >= 0.5) {
      resolve('you WIN')
    } else {
      reject(new Error('you LOSS',))
    }
	}, 2000)
})

lotteryPromise
	.then((res => console.log(res)))
	.catch((err) => console.error(err))
*/


// Promisifying setTimeout
/*
const wait = function (seconds) {
	return new Promise(function (resolve, reject) {
		setTimeout(resolve, seconds * 1000)
	})
}

wait(2).then(() => {
	console.log(`I waited for 2 seconds`);
	return wait(1)
}).then(() => {
	console.log(`I waited for 1 seconds`);
})


Promise.resolve('you WIN!').then(x => console.log(x))
Promise.reject(new Error('you LOSS!')).catch((y) => console.error(y))
*/

//////////////////////////////////////////////////////////////////////////////////////

const getPosition = function () {
	return new Promise(function (resolve, reject) {
		// navigator.geolocation.getCurrentPosition(
		// 	(position) => resolve(position),
		// 	(error) => reject(new Error(error.message))
		// )
		navigator.geolocation.getCurrentPosition(resolve, reject)
	})
}

getPosition().then(pos => console.log(pos)).catch(err => console.log(err))


const whereAmI = function () {
	getPosition().then(position => {
		const { latitude: lat, longitude: lng } = position.coords
		const geoAPI = `https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
		return fetch(geoAPI)
	})
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Problem in Geo Coding ${res.status}`)
      } else {
        return res.json()
      }
    })
    .then((data) => {
      const preview = `<span class="continent">Continent: ${data.continent}</span>
			<span class="countryName">Country: ${data.countryName}</span>
			<span class="principalSubdivision">Sub-Division: ${data.principalSubdivision}</span>
			<span class="city">City: ${data.city}</span>
			<span class="locality">Locality: ${data.locality}</span>
			<span class="plusCode">PlusCode: ${data.plusCode}</span>`

      output.insertAdjacentHTML('beforeend', preview)
    })
    .catch((err) => console.log(`😒 ${err.message} : Error)}`))
}

whereAmI()