const myNum=[1,2,3,4,5,6,7,8,9,10]

//let sum=myNum.map((i)=> i+10)

sum=myNum
        .map((i)=>i*10)
        .map((i)=>i-1)
        .filter((i)=>i<99)
console.log(sum);
