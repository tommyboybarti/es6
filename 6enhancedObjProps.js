// property shorthands
const first = 'bob';
const last = 'hasd';
const age = 10;

const person = {
  first,
  last,
  age
  // ES5
  // first: first, last: last etc.
}

person;

// computed property names of an object
const key = 'last'

function getKey() {
  return 'hello';
}
const person2 = {
  first: 'john',
  [key]: 'harvey',
  ['age']: 20,
  [getKey()]: 'testing'
}

person2;

// method properties
const person3 = {
  first: 'dale',
  age: 20,
  // simplfied fct instead of haveABday: function () {
  haveABday () {
    this.age++;
  }
}
person3.haveABday();
person3;

// EXAMPLES
const name4 = 'bob';
const age4 = 20;
const obj = {name4, age4};
console.log(obj);

// the computed value of the variable or expression is used as the key when using the computed property names
const confused = 'no';
const myKey = confused;
const obj2 = {
    [myKey]: false
}
console.log(obj2);

const piece = {
  x: 0,
  y: 0,
  move (x, y) {
    this.x = x;
    this.y = y;
  }
}
piece.move(10, 10);
console.log(piece);
