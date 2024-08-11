// there are two types of data type in js
// primitive datatype

// here are some examples{7 type of}
//num, bigInt, string, null, undefined, symbol, boolean
const point = 200;
const pointNo = 259.898;
// console.log(typeof point);
//.............................................

let shopName = "kolahal";
//.............................................

const id = Symbol("123");
const notId = Symbol("123"); // both symbol are not same although they looks same .
// console.log(id === notId)
//.............................................

// console.table(typeof[point, pointNo])

// relational (non-primitive) datatype
// here are some examples{3 type of}
// array, function, object

const data = ["thor", "iron man", "hulk"]
console.log(typeof data)
//.............................................
let myObj = {
  name: "kane",
  age: 99,
}
console.log(typeof myObj)
//.............................................
const myFunction = function () {
  console.log("prefer not to say anything !")
}
console.log(typeof myFunction)
//.............................................
let myArray = [1, "hello", true, null];
console.log(typeof myArray)

