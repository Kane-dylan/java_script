const UserMail = ""

if (UserMail){
  console.log("Got the mail_Id !")
} else {
  console.log("Haven't got mail_Id !")
}
// falsy val: false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy val: true,1,"0","false"," ",[],{}, function(){}


if (UserMail.length === 0){
  console.log("Array is empty")
}

const food={}
if (Object.keys(food).length=== 0){
  console.log("Object is empty")
}