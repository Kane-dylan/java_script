let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())

let myCurrentDate = new Date(2024, 6, 17)
console.log(myCurrentDate)
let myCurrentDate1 = new Date(2024, 6, 17, 12, 52)
console.log(myCurrentDate1.toLocaleString())
let myCurrentDate2 = new Date("07-17-2024")
console.log(myCurrentDate2.toLocaleString())
let myCurrentDate3 = new Date(2024, 6, 17)
console.log(myCurrentDate3)


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCurrentDate.getTime())
console.log(myCurrentDate1.getTime())
console.log(myCurrentDate2.getTime())
console.log(myCurrentDate3.getTime())

console.log(Math.max(myCurrentDate,myCurrentDate1,myCurrentDate2,myCurrentDate3,myTimeStamp))


let newDate = new Date()
newDate.toLocaleString('default',{
  weekday: "narrow"
})