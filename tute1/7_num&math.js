// numbers and games
const balance = new Number(500)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const newNum = 743.382932
console.log(newNum.toPrecision(5))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))



//******************Math**********************//

console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(78.28))
console.log(Math.min())

console.log(Math.max(4,85,93,587,942))



console.log(Math.random())
console.log((Math.random()*10)+1)

//formula of generating random numbers between some range
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+(min)))

