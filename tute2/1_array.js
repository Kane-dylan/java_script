// // array
// const myArr = [9, 3, 6, 5];
// const myArr1 = ["ironMan", "hulk", "thor"];

// console.log(myArr, myArr1);

// const myArr2 = new Array(4, 5, 7, 3, 7, "lol", "cat");
// console.log(myArr2[6]);

// myArr2.push("joker");
// console.log(myArr2);

// myArr2.pop();
// console.log(myArr2);

// myArr2.unshift(7);
// myArr2.shift();
// console.log(myArr2);

// console.log(myArr2.includes(8));
// console.log(myArr2.indexOf(3));

// const newArr = myArr2.join(); //covert this arr in a string
// console.log(newArr);


// //slice and splice

// console.log("A ", myArr1)

// const myNewArr = myArr1.slice(1,2)
// console.log("B ", myArr1)
// console.log("B ", myNewArr)

// //the main difference between slice and splice is :
// // slice don't change original array : but splice pop out the original element from array.

// const myNewArr1 = myArr1.splice(1,2)
// console.log("C ", myArr1)
// console.log("C ", myNewArr1)

// array operations

const marvel_heros = ["captain","hawkeye","strange"]
const dc_heros = ["batman","adam","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros,...dc_heros]

const another_arr = [1,6,3,8,7,[7,3,6,3,9,[2,4,7,8,[0,0]]]]
const actual_arr = another_arr.flat(Infinity)
console.log(actual_arr);

console.log(Array.isArray("lolcat"))
console.log(Array.from("lolcat"))
console.log(Array.from({name: "lolcat"})) // special case , we have to specify the key here 


const point1 = 1
const point2 = 2
const point3 = 3
console.log(Array.of(point1,point2,point3))

arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.every((i)=> i<10))
console.log(arr.some((i)=> i<10))
//array methods
arr.forEach((i)=> console.log(i))
