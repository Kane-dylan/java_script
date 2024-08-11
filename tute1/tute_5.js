// heap (non - primitive )

let userOne = {
  name:"jatin",
  gmail:"lol2k@outlook.com",
  phoneNo: 9842748447
}

let userTwo = userOne
userTwo.name = "jalwa" //call's the data from one location so data value changes.

console.log(userOne)
console.log(userTwo)
 

//stack (primitive)

let coke = "thumb's up !"
let sprite = coke
sprite = "chill everyday ;)"//it copies the recall data that's why it doesn't changed.

console.table([coke,sprite])