// create a generator

function* myGenerator () {
  yield 1;
}

const iter = myGenerator();
// get an iterator obj back
iter;
console.log(iter.next());
// once finished value is undef and done true
console.log(iter.next());

function* myNewGen () {
  console.log('a');
  yield 1;
  console.log('b');
  yield 2;
  return; // this is to breakout of generator if needed
  console.log('c');
  yield 3;
}

const newIter = myNewGen()
console.log(newIter.next());
// generator will pause executing code, when the next yield is not called
console.log('hello')
console.log(newIter.next());
console.log(newIter.next());
console.log(newIter.next());


function* fibonacci () {
  let n1 = 0;
  let n2 = 1;
  // usually bad practice, but doable here with generators that yield before the next step.
  while (true) {
    let current = n1;
    n1 = n2;
    n2 = current + n1;
    let reset = yield current;
    if (reset) {
      n1 = 0;
      n2 = 1;
    }
  }
}

const anotherIter = fibonacci();
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
// pass in params to generator to reset the infinite loop
console.log(anotherIter.next(true));
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());
console.log(anotherIter.next());


// define generator fct onto obj
const obj = {
  // property shorthand
  * myGeneratorObj () {
    // use a * to pass an array
    yield* [1, 2, 3];
    yield 'hello'
  }
}

const moreIter = obj.myGeneratorObj();
// console.log(...moreIter)  is also possible as a shortform for the logs below!
console.log(moreIter.next())
console.log(moreIter.next())
console.log(moreIter.next())
console.log(moreIter.next())
console.log(moreIter.next())

// EXAMPLE
function* randomHexGenerator(hexArray){
  let arrLength = hexArray.length;
  while(true){
      let cIndex = Math.floor(Math.random()*arrLength)+1;
      yield hexArray[cIndex-1];
  }
}
const iterHex = randomHexGenerator([ 'FF0000', '00FF00', '0000FF', 'FF00FF' ]);
console.log(iterHex.next());
console.log(iterHex.next());
console.log(iterHex.next());
console.log(iterHex.next());
