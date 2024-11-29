console.log(`test start`);
setTimeout(() => console.log('0 sec timer'), 0)
Promise.resolve('Resolved promise 1').then((res) => console.log(res))
console.log(`test end`);