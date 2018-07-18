// new data type Symbol()
// the data type "symbol" is a primitive data type having the quality that, 
// values of this type can be used to make object properties that are anonymous. 
// this data type is used as the key for an object property when the property is intended to be private, 
// for the internal use of a class or an object type.
const symA = Symbol()
const symB = Symbol('key goes here')

symA;
symB;

// not the same!
console.log(symA === symB)

const obj = {
  [symA]: 'hello'
}
// obj is blank! Symbol don't count as props
obj;
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))

// global symbol identifable by key -> use .for()
const symC = Symbol.for('my unique key');
const symD = Symbol.for('my unique key');
// now they're equivalent
console.log(symC === symD)


// overwrite default behavior of Symbol props
const capsSplitter = {
  [Symbol.split] (string) {
    return string
      .split(' ')
      .map(s => s.toUpperCase())    
  }
}
const message = 'hello world'
const splits = message.split(capsSplitter)
splits;
