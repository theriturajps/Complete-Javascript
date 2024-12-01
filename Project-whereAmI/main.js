const btn = document.querySelector('.btn-country')
const output = document.querySelector('.output')

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const whereAmI = function (lat, lng) {
	const geoAPI = `https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
	fetch(geoAPI)
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

whereAmI(25.369203, 85.042997)