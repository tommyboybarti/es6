// fct definition = declaration = statement means that the fct has got a name
// !== fct expression. fct can be annoymous const something = fct () {}

// name is the parameter at the time of the fct execution
function greet(name) {
  console.log(`hello ${name}`)
}
// argument = input value to the parameter of the fct
greet('Monica')


// FACTORY FCT = consolidate information as much as possible for reusage
// => call a fct and return an obj
function createCircle(radius) {
  // needs to return an obj unlike constructor where it happens under the hood
  return {
    radius,
    draw () {
      console.log('draw')
    }
  }
}
const circle1 = createCircle(1);
console.log(circle1)
const circle2 = createCircle(2);
console.log(circle2)

// CONSTRUCTOR FCT - Pascal naming convention = 1. capital letter 
// instead of returning an object we use the this keyword to set its properties
function Circle(radius) {
  // set property to the empty obj
  this.radius = radius;
  this.draw = function () {
    console.log('draw again')
  }
  // no return this needed here..
}
// set circle to reference the new obj which we get on the right side
const circle = new Circle(1);
// Steps
// 1. new creates empty obj
// 2. this keyword will point to the new obj and set the properties radius and draw
// 3. finally the new operator will return the new obj from the Circle fct (invisible)