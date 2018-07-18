class Person {
  constructor (name, age) {
    // private props _ do not touch
    this._name = name;
    this._age = age;
  }
  get name () {
    return this._name + '!';
  }
  set name (name) {
    this._name = name;
  }
}
const person = new Person('jade', 20);

// run a method, where no () are needed, because of getter
const name = person.name;
name;

// access property _name
const _name = person._name;
_name;

// also for setter there is no () needed
person.name = 'alex';
person;
