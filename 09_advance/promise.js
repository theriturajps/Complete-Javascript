// const proms1 = new Promise()

const proms2 = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptographics, network call
    setTimeout(function(){
        console.log("COMPLETED");
        resolve()
    }, 1000)
})


proms2.then(function(){
    console.log("Promise Consumed");
})
//////////////////////////////////////////////////////////////////////////////////

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//////////////////////////////////////////////////////////////////////////////////

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "rituraj", 
            email: "rituraj@example.com"
        })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//////////////////////////////////////////////////////////////////////////////////

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "rituraj", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//////////////////////////////////////////////////////////////////////////////////

fetch('https://api.github.com/users/theriturajps').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))
