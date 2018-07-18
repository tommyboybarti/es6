// link all the nested callback fct together
function getName () {
  return new Promise((resolve, reject) => {
  // resolve can be catched with .then
  // reject can be catched with .catch
    setTimeout(() => {
    // call resolve fct
      resolve('bob');
    }, 1000)
  })
}

function getAge () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(33);
    }, 4000)
  })
}

// helper function: wait for all functions that are in the array to resolve 
Promise.all([
  getName(),
  getAge()
])
  .then(([name, age]) => {
    console.log(name)
    console.log(age)
  })
  // if one of the promises fails.. 
  .catch(err => {
    console.log(err);
  })
  // you can still continue with the logic even if an err occurred
  .then(() => {
    console.log('hello')
    return 'bouger'
  })
  .then(value => {
    console.log(value);
  })

//  Alternative:
getName()
  .then(name => {
    console.log(name);
    // Promise chaining, pass values on to next
    return getAge();
  })
  // .then(getAge) is also possible instead of return above
  .then(age => {
    console.log(age);
  })