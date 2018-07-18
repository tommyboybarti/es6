// matching gets done automatically, order matters tho
const numbers = [1, 2, 3, 4];
const [a, b, c, d] = numbers;
a;
b;
c;
d;

// don't have to call all the numbers
const holes = [1, 3, 5, 7];
const [, , g, h] = holes;
g;
h;


function getConfig () {
  return [
    true,
    10,
    1,
    2,
    3
  ]
}
// this is easier to understand than setting const config and then calling config[0] etc.
const [isOn, amount, ...rest] = getConfig();
isOn;
amount;
rest;


// array matching can also happen as params get filled into a fct
let isOff = true;
let volume = 0;

function setConfig ([_isOff, _volume]) {
  isOff = _isOff;
  volume = _volume;
}

setConfig([
  false,
  20
])
isOff;
volume;


// set defaults that are not declared in original array
const arr = [1500];
let [offerA, offerB = 1000] = arr;

offerA;
offerB;


// EXAMPLE
const [first, , third] = 'hello sweet world'.split(' ');
console.log(first, third);
