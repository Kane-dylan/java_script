const myArr = [1,2,3,4]

let Total= myArr.reduce((acc,currval)=>{
  console.log(`acc:${acc} and currval:${currval}`);
  
  return acc+currval
},0)

console.log(Total);
 

const cart=[
  {item:"a",price:20},
  {item:"b",price:200},
  {item:"c",price:30},
  {item:"d",price:790},
  {item:"e",price:249},
  {item:"f",price:2},
]

let Billing=cart.reduce((i,j)=>i+j.price,0)
console.log(Billing);
