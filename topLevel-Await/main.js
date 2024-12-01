'use strict'

const apiURL = `https://jsonplaceholder.typicode.com/posts`

/// Top level await

const sendReq = await fetch(apiURL)
const data = await sendReq.json()
console.log(data)



///////////////////////////////////////////////////////////////////////////////////////////////


const getLastPost = async () => {
	const sendReq = await fetch(apiURL)
	const data = await sendReq.json()
}