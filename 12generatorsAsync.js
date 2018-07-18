// instead of building a callback fct hell because of two async functions that need to run synchronously
// we can use generators. Nevertheless async/await is better!

function getName () {
  setTimeout(() => {
    // pass a value
    iter.next('bob');
  }, 3000)
}

function getAge () {
  setTimeout(() => {
    iter.next(25);
  }, 2000)
}

// generator fct that self-executes
const iter = (function* () {
  const name = yield getName();
  console.log(name);
  const age = yield getAge();
  console.log(age);
}());

iter.next();
iter;