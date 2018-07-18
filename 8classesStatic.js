// static members = method attached to the class and not the instance
// this class EXPRESSION will be hoisted to the top of the scope
const Person = class {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  static setName (person, name) {
    person.name = name;
  }
}

const person = new Person('bobby', 20);
// referencing class name to change instance
Person.setName(person, 'jade');
person;

// another example without declaring Object class
const keys = Object.keys({a: 1});
keys;