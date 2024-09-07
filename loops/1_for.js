// for loops 
for (let i = 0; i <= 10; i++) {
  const element = i;
  if(i == 5){
    // console.log(`5 more to go !`)
  }
  // console.log(element)
}


for (let i = 1; i <=10; i++) {
  // console.log(`outer loop for: ${i}`)
  for (let j = 1; j <=10; j++) {
    // console.log(`${i}*${j}=${i*j}`)
  }  
}

let newArr = ["cat", "dog", "bird", "rat"]
for (let i = 0; i < newArr.length; i++) {
  const element = newArr[i];
  // console.log(`${element}`)
}

for (let index = 1; index <=20; index++) {
  if (index == 5) {
    // console.log(`5 has dictated`)
    break
  }
  // console.log(`${index}`)
}

for (let index = 1; index <=20; index++) {
  if (index == 5) {
    console.log(`5 has dictated`)
    continue
  }
  console.log(`${index}`)
}