// scope (temporary) !== closure (preserves state)
// closure determines what vars are available to an inner fct

function Circle(radius) {
  // set properties of Circle obj
  this.radius = radius;
  // draw has access to radius coz the prop is in the fcts closure
  this.draw = function () {
    console.log('draw')
  }
  // local variable !== properties, can't be accessed from outside, scope is limited to this fct
  let defaultLocation = { x: 0, y: 0 }
  // private method
  let computeLocation = function (factor) {}
}

const circle = new Circle(10);
circle.draw();
console.log(circle.radius);

// let and const are limited to the block in which they are defined -> scope
// outside a block the vars have global scope, in general it's considered back practice
const another = 'again'
{
  const message = 'hi'
  // again
  console.log(another)
}
// message not defined
console.log(message);

// var = function-scoped varialbe, is accessible outside its block
// const, let = block-scoped
// var attaches to window object (window.nameOfVar) when defined outside a fct. let does not do that
