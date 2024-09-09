const coding = ["js", "cpp", "html", "java", "python"];
coding.forEach(function (i) {
  // console.log(i);
});

coding.forEach((i) => {
  // console.log(i);
});

coding.forEach((i,index,arr)=> {
  console.log(i,index,arr);
  
})


const NewArr = [
  {
    language:"javascript",
    extension:"js"
  },
  {
    language:"python",
    extension:"py"
  },
  {
    language:"java",
    extension:"java"
  }
]

NewArr.forEach((item)=>{
  console.log(item.language);
  
})