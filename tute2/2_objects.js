//object literals

const mySym= Symbol("@val")

const chudirVi = {
  name: "kesta",
  "full name": "kesta panja",
  [mySym]:"lower",
  age: 18,
  location:"london",
  email:"kesta@nogooler.com",
  login: true,
  lastLoginDays:["monday","wednesday","friday"]
}

// console.log(chudirVi.lastLoginDays)
// console.log(chudirVi["lastLoginDays"])
// console.log(chudirVi["full name"])
// console.log(chudirVi[mySym])

chudirVi.email="kesta@perplexcity.com"
// Object.freeze(chudirVi)
chudirVi.email="kesta@perplex.com"
// console.log(chudirVi)

chudirVi.greeting = function(){
  console.log("just get lost")
}

chudirVi.greeting1 = function(){
  console.log(`i will got you, ${this["full name"]}`)
}

console.log(chudirVi.greeting())
console.log(chudirVi.greeting1())
