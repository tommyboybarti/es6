// Object-oriented programming !== procedural prog

// procedural
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

// has to declare params in ()
function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

// OOP has ENCAPSULATION where props and methods are integrated into obj.
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20, 
  // no params needed in () coz they are already defined as props of this obj.
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate);
  }
};
employee.getWage();

// ENCAPSULATION:
// group related variables and fct together to reduce complexity and increase reusability

// ABSTRACTION: 
// - simpler interface (hide some of props and methods), 
// - reduce the impact of change, whatever changes indside the obj won't matter outside

// INHERITANCE:
// limit the amount of redundant code, declare something once and make many obj inherit it

// POLYMORPHISM:
// many forms. get rid of long if/else statements. e.g HTML elements have the same method render(), 
// but will be shown differently on the page