'use strict'


const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
}

const accounts = [account1, account2]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Math.sqrt(64)); // 8
console.log(64 ** (1 / 2)); // 8
console.log(27 ** (1 / 3)); // 3

console.log(Math.max(2, 4, 5, 6, 77, 88, 10, 0, 34, 5)); // 88
console.log(Math.max(2, 4, 5, 6, 77, '88', 10, 0, 34, 5)); // 88
console.log(Math.max(2, 4, 5, 6, 77, '88 px', 10, 0, 34, 5)); // NaN

console.log(Math.min(2, 4, 5, 6, 77, 88, 10, 0, 34, 5)); // 0
console.log(Math.min(2, 4, 5, 6, 77, '88', 10, 0, 34, 5)); // 0
console.log(Math.min(2, 4, 5, 6, 77, '88 px', 10, 0, 34, 5)); // NaN


console.log(Math.PI); // 3.141592653589793


console.log(Math.random()); // btw 0 and 1
console.log(Math.trunc(Math.random() * 6) + 1) // random from 1 to 6

console.log(5 % 2); // rem = 1
console.log(5 / 2); // 2.5 [5 = 2 * 2 + 1]
console.log(8 % 2); // rem = 0
console.log(8 % 3); // rem = 2
console.log(8 / 3); // 2.666666666665 [8 = 2 * 3 + 2]


console.log(6 % 2); // [0] even

console.log(`------------------------------------------------------`);

const isEven = (num) => {
  if (num % 2 === 0) {
    console.log(`the ${num} is even`)
  } else {
    console.log(`the ${num} is odd`)
  }
}

isEven(2)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const diameter = 287_340_234_000
console.log(diameter); // 287340234000


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(2 ** 53 - 1);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(9007199254740991111111111111111111111111111111) // 9.007199254740991e+45
console.log(9007199254740991111111111111111111111111111111n) // 9007199254740991111111111111111111111111111111n

console.log(BigInt(9007199254740991111111111111111111111111111111)) // 9007199254740990911454177799317139994366181376n



