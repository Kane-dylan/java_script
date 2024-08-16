// array
const myArr = [9, 3, 6, 5];
const myArr1 = ["ironMan", "hulk", "thor"];

console.log(myArr, myArr1);

const myArr2 = new Array(4, 5, 7, 3, 7, "lol", "cat");
console.log(myArr2[6]);

myArr2.push("joker");
console.log(myArr2);

myArr2.pop();
console.log(myArr2);

myArr2.unshift(7);
myArr2.shift();
console.log(myArr2);

console.log(myArr2.includes(8));
console.log(myArr2.indexOf(3));

const newArr = myArr2.join(); //covert this arr in a string
console.log(newArr);


//slice and splice

console.log("A ", myArr1)

const myNewArr = myArr1.slice(1,2)
console.log("B ", myArr1)
console.log("B ", myNewArr)

//the main difference between slice and splice is :
// slice don't change original array : but splice pop out the original element from array.

const myNewArr1 = myArr1.splice(1,2)
console.log("C ", myArr1)
console.log("C ", myNewArr1)
