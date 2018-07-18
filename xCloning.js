const circle = {
  radius: 1,
  draw () {
    console.log('draw')
  }
}

// copies props and methods from one or more objects into single one
const another = Object.assign({
  color: 'yellow'
}, circle);

// spread an obj. get all props and methods and put them into another empty obj.
const yetAnother = { 
  color: 'red',
  ...circle 
};

console.log(another)
console.log(yetAnother)
