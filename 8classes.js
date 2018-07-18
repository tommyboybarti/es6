// ES 5 - constructor fct
var PersonES5 = function (name, age) {
  this.name = name;
  this.age = age;
}
PersonES5.prototype.jump = function () {
  console.log('jump');
}
const persones5 = new PersonES5('bob', 20);
persones5;
persones5.jump();

// ES 6 (this class definition will not be hoisted to the top of the scope -> needs a class expression like const Person = class {})
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  jump () {
    console.log('jump again');
  }
  getName () {
    return this.name;
  }
}
const person = new Person('dale', 23);
person;
person.jump();

// inheritance of another class thanks to extends
class Employee extends Person {
  constructor (name, age, years) {
    // call the Parents constructor
    super(name, age);
    this.years = years;
  }
  // overwrite the inital jump method
  jump () {
    console.log('jump super high')
  }
  quit () {
    this.years = 0;
  }
  getName () {
    // use parents method by prepending super.
    return super.getName() + '!';
  }
}

const employee = new Employee('john', 20, 10)
employee;
employee.jump();
employee.quit();
employee;
const name = employee.getName();
name;
