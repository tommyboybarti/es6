// rest operator ...
function print (age, siblings, ...arr) {
  // ES 5 logic that is not needed anymore:
  // var arr = Array.prototype.slice.call(arguments);
  console.log(age);
  console.log(siblings);
  console.log(...arr);
}
print(12, 45, 3, 'heel', 'wolr', {})
// there can't be any parameters after ...arr nor can there be 2x ...arr

// spread operator
// this is ES5:
function printAgain () {
  var args = Array.prototype.slice.call(arguments);
  args = ['<br>'].concat(args).concat(['</br>'])
  console.log(args.join(' '));
}
printAgain('hello', 'world');

//ES6
function printAgain6 (...args) {
  args = ['<br>', ...args, '</br>']
  console.log(args.join(' '));
}
printAgain6('hello', 'world', 1, 2, 3)

// a string is an example of an iterable collection over which we could iterate with a for loop
// or convert it to an array by using a spread operator -> string becomes array.
const message = "hello world";
const chars = ['!', ...message];
chars;

function add(a, b) {
  return a + b;
}
const arr = [2, 10];
console.log(add(...arr));

const arr5 = [1, 2, 3];
const arr6 = [...arr5];

arr5;
arr6;
// arr6 is a copy of arr5, so it's not affected when changes happen afterwards
arr5[0] = 5;
arr5;
arr6;

const numbers = [1, 3, 42, 41, 4];
const max = Math.max(...numbers)
max;

// Examples:
function sum(...numbers) {
  // reduce the values of an array to a single value (going left-to-right)
  return numbers.reduce((acc, number) => acc + number);
}

const answer = sum(1, 5, 20, 10);
// 1+5, 6+20, 26+10 -> 36
console.log(answer);


// the first parameter is the base number we add to the other numbers that we multiply by two; 
// therefore, the returned value is an array of length 4 only containing the REST of the parameters after base.
function multiplyBy2(base, ...numbers) {
  // creates a new array with the result of calling a function for each array element
  return numbers.map(number => number * 2 + base)
}
const anotherAnswer = multiplyBy2(100, 1, 5, 20, 10);
console.log(anotherAnswer);


const names = [
  'bob', 
  ...[
      'donald'
  ],
  'suzy', 
  'lacy',
  ...[
      'richard', 
      'alex'
  ]
 ]
 console.log(names);
 