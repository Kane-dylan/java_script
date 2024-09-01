const user = {
  userName: "jack",
  age: 29,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to my VScode`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
console.log(this); // in browser "this" will return window object

function coffee() {
  let username = "jack";
  console.log(this.username);
}
coffee();

const coffee1 = function () {
  let username = "jack";
  console.log(this.username);
};
coffee();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
const add = (num1, num2 ) => (num1 + num2)
console.log(addTwo(3, 4));
console.log(add(3,9))

const string = (num1, num2 ) => ({username: "jack"})
console.log(string())