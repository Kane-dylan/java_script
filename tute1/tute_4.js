// there are two types of data type in js
// primitive datatype

// here are some examples{7 type of}
//num, bigInt, string, null, undefined, symbol, boolean
const point = 200
const pointNo = 259.898
console.log(typeof point);

let shopName = "kolahal"

const id = Symbol('123')
const notId = Symbol('123')// both symbol are not same although they looks same .
console.log(id === notId)

console.table(typeof[point, pointNo])
// relational (non-primitive) datatype