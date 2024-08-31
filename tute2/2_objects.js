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

// console.log(chudirVi.greeting())
// console.log(chudirVi.greeting1())


// object singleton

// const bumbleUser=Object()
const bumbleUser={}
bumbleUser.name="jain"
bumbleUser.gmail="stree@stree2.com"
bumbleUser.login=true


// console.log(bumbleUser);

const user={
  email:"nocode@make.com",
  userName:{
    fullName:{
      firstName: "kesta",
      lastName: "panja"
    },
    userId:{
      id:984267
    }
  }
}


console.log(user.userName.userId);



const obj1 = {a: 2, b: 5}
const obj2 = {c: 9, d: 4}
const obj3 = {m: 7, h: 6}


// const obj4 = {obj1,obj2,obj3}   ** we must avoid this procedure
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

const customer =[
  {
    id:67,
    mail:"kalu@gmail.com",
  },
  {
    id:68,
    mail:"lalu@gmail.com",
  },
  {
    id:69,
    mail:"kaku@gmail.com",
  }
]

customer[1].mail
console.log(bumbleUser)
console.log(Object.keys(bumbleUser))
console.log(Object.values(bumbleUser))
console.log(Object.entries(bumbleUser))

console.log(bumbleUser.hasOwnProperty("gmails"))


const course ={
  coursename: "js",
  price: 0,
  CourseInstructor: "hritesh"
}

// console.log(course.CourseInstructor)  instate of this line we will be using d-structure.

const {coursename:kok} = course
console.log(kok)