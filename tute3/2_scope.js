// var c = 300
let a = 100; // this is global scope
if (true) {
  let a = 10; // this is block scope
  const b = 20;
  // var c = 30
  console.log("inner: ", a);
}

console.log(a);
// console.log(b)
// console.log(c)v

function one() {
  const name = "jack";

  function two() {
    const home = "kolkata";
    console.log(name);
  }

  //  console.log(home);  // this line contains error !!!
  two();
}

one();

if (true) {
  const name = "jack";
  if (name === "jack") {
    const os = " linux";
    console.log(name + "'s" + os);
  }
  // console.log(os); // this is an error catching line.
}

// console.log(name); // this is also an error catching line.

function addOne(num) {
  return num + 1;
}
console.log(addOne(5));

console.log(addTwo(5));  // in this case we cannot call function before declaration 
const  addTwo = function(num) {
  return num + 2;
}
