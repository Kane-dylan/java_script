const myObj = {
  js: "javascript",
  cpp: "c++",
  py: "python",
  rb: "ruby",
};
for (const key in myObj) {
  // console.log(`${key} shortcut for : ${myObj[key]}`);
}

const arr = ["js", "cpp", "py", "java", "php"];
for (const key in arr) {
  // console.log(arr[key]);
}

const map =new Map()
map.set('IN','India')
map.set('BR','Brazil')
map.set('FR','France')

for (const key in map) {
  console.log(key); 
}

let num = [2,5,7,9]
let doubledNum =[]

for (let i = 0; i < num.length; i++) {
  if(num[i] === 7){
    continue;
  }  
  doubledNum.push(num[i]*2);
}
// console.log(doubledNum);

let tea =["chai","green tea","black tea","jasmine tea","herbal tea"]
let shortTeas =[]

for (const teas of tea) {
  if(teas.length > 10){
    break;
  }
  shortTeas.push(teas)
}
console.log(shortTeas);
