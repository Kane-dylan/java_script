function callBy (number1, number2){
  sum = number1+ number2
  return sum
}

const result = callBy(9,4)
console.log("Result:",result)



function LoginUser (username){
  if (username === undefined){
    console.log("Please enter your UserName")
    return
  }
  return `${username} just logged in!`
}

// var name = prompt("Enter your UserName")
// console.log("name")
console.log(LoginUser())


function multiItemsCart(val1, val2,...num1){
  return num1
}

console.log(multiItemsCart(2, 4, 8, 29, 52, 93, 175))


const user = {
  name: "john",
  age: 25,
  occupation: "employee"
}

function ObjectHandeling (anyObject){
  console.log(`UserName is ${anyObject.name}  and Age is ${anyObject.age} . ${anyObject.name} is an ${anyObject.occupation}`)
}

// ObjectHandeling(user)
ObjectHandeling({
  name: "joker",
  age: 27,
  occupation: "student"
})


const NewArray = [5, 6, 9, 3, 1, 0]

function ArrayCall (myArr){
  return myArr[3]
}

// console.log(ArrayCall(NewArray))
console.log(ArrayCall([5, 6, 9, 3, 1, 0]))