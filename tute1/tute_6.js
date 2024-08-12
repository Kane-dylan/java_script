const data = " Time";
const time = new String("Dinner");

console.log(time + data);
console.log(`This is the ${data} for completing ${time}`);

// Declare and initialize a string variable
// const data = " Time";`

// Declare and initialize a String object
// const time = new String("Dinner");

// Concatenation using the '+' operator
console.log(time + data); // Outputs: Dinner Time

// Template literals (using backticks)
console.log(`This is the ${data} for completing ${time}`); // Outputs: This is the  Time for completing Dinner

// String length property
console.log(`The length of the string "${time}" is ${time.length}`); // Outputs: The length of the string "Dinner" is 6

// String to uppercase
console.log(`Uppercase: ${time.toUpperCase()}`); // Outputs: Uppercase: DINNER

// String to lowercase
console.log(`Lowercase: ${time.toLowerCase()}`); // Outputs: Lowercase: dinner

// String substring
console.log(`Substring: ${time.substring(2, 5)}`); // Outputs: Substring: din

// String includes
console.log(`Does "${time}" include "inner"? ${time.includes("inner")}`); // Outputs: Does "Dinner" include "inner"? true

// String replace
console.log(
  `Replacing 'inner' with 'delicious': ${time.replace("inner", "delicious")}`
); // Outputs: Replacing 'inner' with 'delicious': Ddelicious

// String trim
const greeting = "   Hello, World!   ";
console.log(`Trimmed greeting: "${greeting.trim()}"`); // Outputs: Trimmed greeting: "Hello, World!"

// String split
const words = greeting.trim().split(", ");
console.log(`Words in the greeting: ${words}`); // Outputs: Words in the greeting: Hello,World!
