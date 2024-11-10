function init() {
  let name = 'Mozilla'

  function displayName() {
    console.log(name)
  }

  return displayName
}

const myFun = init()

myFun()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure