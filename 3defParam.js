// default parameters
function buy (item = 'eggs', amount = 1) {
  amount;
  item;
}
// no need to pass arguments for fct, coz defaults are set
buy();

// Examples:
function add (a = 0, b = 10) {
  return a + b;
}
const sum = add(10);
console.log(sum);

function User(email, flags = { isActive: false }, numbers = [7, 1]) {
  this.email = email;
  this.flags = flags;
  this.numbers = numbers;
}
const user = new User('testing@gmail.com');
console.log(user);