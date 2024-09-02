//Immediately Invoked Function Expressions (IIFE)

(function coffee (){
  console.log("DB Connected")
})();  // this semicolon is madentory 


((name)=> {
  console.log(`${name} DB Connected again `)
})("joker")