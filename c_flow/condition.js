const score = 200
 if (score > 100) {
  const power = "fly"
  console.log(`UserPower : ${power}`)
}
// console.log(`UserPower : ${power}`) // this line through an error in the code , power constant is limited in block scope.

const loginId= true
let loginPass= true

if (loginId && loginPass){
  console.log("You are logged in")
}
loginPass= false
if (loginId || loginPass){
  console.log("You can login without pass")
}

const money = 1000;
if (money<500){
  console.log("money is less then 500")
} else if (money< 750){
    console.log("money is less then 750")
} else{
  console.log("money is greater then 900")
}


// Nullish Coalescing operator (??) : null & undefined

let val1;
val1 = 4 ?? 20
val1 = null ?? 15
val1 = undefined ?? 10
val1 = null ?? undefined ?? 5

console.log(val1)

// ternary operator 
const coffee = 200
coffee <= 100 ? console.log("coffee is more than 100"): console.log("coffee is more than 100w");
;
