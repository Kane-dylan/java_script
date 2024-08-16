const data = " Time";
const time = new String("Dinner");

console.log(time + data);
console.log(`This is the ${data} for completing ${time}`);

const lolcat = new String('not-worry')

console.log(lolcat)
console.log(lolcat.toLowerCase())
console.log(lolcat.charAt(3))

const loldog = lolcat.substring(1,6)
console.log(loldog)

console.log(lolcat.length)

const doma = lolcat.slice(-9,6)
console.log(doma)

const hi = String('             hi      ')
console.log(hi)
console.log(hi.trim())


const url = "https://github.com-kane/dylan"
console.log(url.replace("-","/"))


console.log(lolcat.split('-'));