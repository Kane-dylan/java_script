// Array Properties and Operations

// 1. Array Properties
let fruits = ["apple", "banana", "cherry"];
console.log("Array length:", fruits.length); // 3

// 2. Array Operations (Methods)

// 2.1 push() - Add elements to the end
let numbers = [1, 2, 3];
numbers.push(4);
console.log("After push:", numbers); // [1, 2, 3, 4]

// 2.2 pop() - Remove the last element
let last = numbers.pop();
console.log("Popped element:", last); // 4
console.log("After pop:", numbers); // [1, 2, 3]

// 2.3 unshift() - Add elements to the beginning
numbers.unshift(0);
console.log("After unshift:", numbers); // [0, 1, 2, 3]

// 2.4 shift() - Remove the first element
let first = numbers.shift();
console.log("Shifted element:", first); // 0
console.log("After shift:", numbers); // [1, 2, 3]

// 2.5 concat() - Merge two arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log("After concat:", merged); // [1, 2, 3, 4]

// 2.6 slice() - Extract a portion of the array
let sliced = numbers.slice(1, 3);
console.log("Sliced portion:", sliced); // [2, 3]

// 2.7 splice() - Add or remove elements at any position
numbers.splice(2, 0, 4, 5);
console.log("After splice (add):", numbers); // [1, 2, 4, 5, 3]

// 2.8 indexOf() - Find the index of an element
console.log("Index of 2:", numbers.indexOf(2)); // 1

// 2.9 includes() - Check if an array contains an element
console.log("Includes 5:", numbers.includes(5)); // true

// 2.10 forEach() - Execute a function on each array element
numbers.forEach((num) => console.log("Double:", num * 2)); // Double: 2, 4, 8, 10, 6

// 2.11 map() - Create a new array by transforming elements
let doubled = numbers.map((num) => num * 2);
console.log("After map (double):", doubled); // [2, 4, 8, 10, 6]

// 2.12 filter() - Create a new array with elements that pass a condition
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4]

// 2.13 reduce() - Reduce the array to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum); // 15

// 2.14 reverse() - Reverse the array order
numbers.reverse();
console.log("After reverse:", numbers); // [3, 5, 4, 2, 1]

// 2.15 sort() - Sort the array elements
let unsorted = [3, 1, 4, 2];
unsorted.sort();
console.log("After sort:", unsorted); // [1, 2, 3, 4]

// Sort numbers in ascending order
unsorted.sort((a, b) => a - b);
console.log("After sort (ascending):", unsorted); // [1, 2, 3, 4]
