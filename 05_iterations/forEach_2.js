// const coding = ["js", "ruby", "java", "python", "cpp"]

// const codeValue = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(codeValue);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums);


console.log(`----------------------------------------------------`);


const numArray = []
myNums.forEach( (myItem) => {
    if(myItem > 4){
        numArray.push(myItem);
    }
})
console.log(numArray);


console.log(`----------------------------------------------------`);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

console.log(books.length);

let userBook1 = books.filter( (myBk) => {
    return myBk.genre == 'History';
})
console.log(userBook1, userBook1.length);



const userBook2 = books.filter( (myBk) => myBk.publish >= 1995 && myBk.genre == 'History')
console.log(userBook2, userBook2.length);


