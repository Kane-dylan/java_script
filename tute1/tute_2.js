//defining some variables by author 
const accountId = 5541 

/*
difference b/w let and var is 

function test() {
  var x = 10;
  let y = 20;

  if (true) {
    var x = 30; // Redeclaration allowed with var
    let y = 40; // Redeclaration not allowed with let
    console.log(x); // Output: 30
    console.log(y); // Output: 40
  }

  console.log(x); // Output: 30 (var is function-scoped)
  console.log(y); // Output: 20 (let is block-scoped)
}
*/
let emailId = "john@lol.co.in"
var  accountPass = "lol"

accountCity = "delhi"

console.table([accountId,emailId,accountPass,accountCity])

//some changes made by author on variables
// accountId = 1934
emailId = "update@unknown.co.in"
accountPass = "kook"
accountCity = `bally`
let accountState 

console.table([accountId,emailId,accountPass,accountCity,accountState])
