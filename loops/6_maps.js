// const coding = ["js", "cpp", "html", "java", "python"];

// const value = coding.forEach((item)=>{
//   console.log(item)
// })
// console.log(value);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const val1= myNum.filter((num)=>{
//   return num>4
// })

const val1 = []
myNum.forEach((num)=>{
  if (num>4) {
    val1.push(num)
  }
})
console.log(val1)

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
 let Books=books.filter((bk)=>bk.genre ==='Non-Fiction')
 Books=books.filter((bk)=>{return bk.publish>1995})
 console.log(Books);
 