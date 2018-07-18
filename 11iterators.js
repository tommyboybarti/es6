const message = 'hello world';
// loop over iterable obj -> prints out a lamda, so it's an actual fct that can be used. Ergo also an iterable obj.
console.log(message[Symbol.iterator]);
// new to ES6 For Of
for (let char of message) {
  char;
}

const iter = message[Symbol.iterator]();
// gets us an iterable object
iter;

let cur = iter.next();
// done is set to true at the last character of the iterable object (d)
cur;
// set up a while loop similar to the for of loop!
while (cur.done === false) {
  console.log(cur.value);
  cur = iter.next();
}


// custom iterable obj.
const codes = {
  // declare the obj to be iterable
  [Symbol.iterator] () {
    let cur = 0
    // make it a proper iterable obj by returning an obj with a next method
    return {
      // declare next fct
      next () {
        // declare an obj with props
        return {
          value: Math.random()*100,
          done: cur++ > 4
        }
      }
    }
  }
}

for (let code of codes) {
  code;
}
