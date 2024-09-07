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