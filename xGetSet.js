let person = {
  firstName: 'anna',
  lastName: 'bell',
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// method cannot be accessed from outside without getters and setters
// getters => access & setters => change (mutate) them
// special kind of methods in objects

person.fullName = 'Johnny Boy';

console.log(person);