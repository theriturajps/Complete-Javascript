let news = document.querySelector('.news')

const apiKey = 'ed5609b0efe84d02affef64a319e8013'

const baseUrl = 'https://newsapi.org/v2/'
const newsType = 'top-headlines'
const category = 'science'
const countryName = 'us'

const api = `https://newsapi.org/v2/${newsType}?country=${countryName}&category=${category}&apiKey=${apiKey}`

fetch(api)
  .then((response) => response.json())
	.then((data) =>{
		
		const numLength = data.articles.length
		const newsData = data.articles


		setInterval(() => {
			
			

		}, 1000);
		

	}
		
  )
  .catch((error) => console.log(error))
