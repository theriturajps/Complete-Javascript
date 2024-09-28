//////////////////////////////// fetch API ////////////////////////////////

// let promise = fetch(url, [options]);


const baseURL = "https://cat-fact.herokuapp.com/facts";

// let catFact = fetch(baseURL)
// console.log(catFact);

const catFact = async () => {
    // console.log("Fetching Data's .......");
    let catRespnse = await fetch(baseURL);
    let data = await catRespnse.json();
    // console.log(data[0].text);
};



