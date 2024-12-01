'use strict'

// async -> keep running in background while performing the code inside of it and after that it returns promises.
// inside async function there can be many await........

const whereAmI = async function (country) {
  // API
  const apiURL = `https://restcountries.com/v2/name/${country}`

  /* Same to Same
  const res = await fetch(apiURL)
    .then(response => response.json())
    .then(([data]) => console.log(data))
  */
  
  const res = await fetch(apiURL)
    const [dataJson] = await res.json()
    console.log(dataJson);
}

// whereAmI('portugal')

///////////////////////////////////////////////////////////////////////////////////////////////

try {
  let y = 1
  const x = 2
  x = 3
} catch (err) {
  console.log(err.message)
}

///////////////////////////////////////////////////////////////////////////////////////////////

const iAmWhere = async function (country) {
  const apiURL = `https://restcountries.com/v2/name/${country}`
  
  try {
    const res = await fetch(apiURL)
    const [dataJson] = await res.json()
    console.log(`${dataJson.name}`);
  } catch (error) {
    console.log(error.message);
  }
}

// iAmWhere('USA')

///////////////////////////////////////////////////////////////////////////////////////////////

const iAmWhere2 = async function (country) {
  const apiURL = `https://restcountries.com/v2/name/${country}`
  
  try {
    const res = await fetch(apiURL)
    const [dataJson] = await res.json()
    return `${dataJson.name}`
  } catch (error) {
    console.log(error.message);
  }

}

const array = iAmWhere2('USA') // Promise {<pending>}
// console.log(array);

array
  .then(data => console.log(data)) // United States of America
  .catch((error) => console.log(error.message))
  .finally(() => console.log(`Success`))


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

const getJson = async (apiURL) => {
  const sendReq = await fetch(apiURL)
  const [json] = await sendReq.json()
  return [json]
}

const countryFetch = async (c1, c2, c3) => {
  try {
    const [data1] =  await getJson(`https://restcountries.com/v2/name/${c1}`)
    const [data2] =  await getJson(`https://restcountries.com/v2/name/${c2}`)
    const [data3] = await getJson(`https://restcountries.com/v2/name/${c3}`)
    console.log([data1.capital, data2.capital, data3.capital]); // (3) ['Beijing', 'Washington, D.C.', 'Diego Garcia']
  } catch (error) {
   console.log(`ERROR : ${error.message} : ${error.status}`); 
  }
}

countryFetch('china', 'usa', 'india') 

///////////////////////////////////////////////////////////////////////////////////////////

const countryFetch2 = async (c1, c2, c3) => {
  try {
    const data = await Promise.all([
      getJson(`https://restcountries.com/v2/name/${c1}`),
      getJson(`https://restcountries.com/v2/name/${c2}`),
      getJson(`https://restcountries.com/v2/name/${c3}`),
    ])

    console.log(data.map(d => d[0].capital)) // (3) ['Beijing', 'Washington, D.C.', 'Diego Garcia']
  } catch (error) {
   console.log(`ERROR : ${error.message} : ${error.status}`); 
  }
}

countryFetch2('china', 'usa', 'india') 

///////////////////////////////////////////////////////////////////////////////////////////

