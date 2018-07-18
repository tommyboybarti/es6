// Quokka Cmd+Shift+P for displaying command palette

// Arrow functions
const arr = [1, 2, 3, 4]
const byTwo = arr.map(function(numbers) {
    return numbers * 2;
})
console.log(byTwo);

// same as:
const byTwoShort = arr.map(num => num * 2)
console.log(byTwoShort)

// More arrow, this gets passed on into the next higherup scope, so it has access to value
const obj = {
    value: 0,
    // can't be an arrow fct, otherwise it will access the global scope where value is not defined
    increment: function () {
        // here pass this on to obj scope
        setTimeout(() => {
            this.value++
            console.log(this.value)
        }, 1000)
    }
}
obj.increment() 

// one more example
{
  this.x = 10;
  this.y = 10;
  this.vx = 20;
  this.vy = 20;
  
  let obj = {
    x: 0,
    y: 0,
    vx: 5,
    vy: 5,
    update: () => {
      this.x += this.vx;
      this.y += this.vy;
    },
    getPosition: function () {
      return [this.x, this.y];
    }
  }
  
  obj.update();
  
  console.log(obj.getPosition());
  console.log([this.x, this.y]);
}

// the IIFE inside the updateName function has it's own scope; 
// therefore, name is not referring to the name of the person object.
const person = {
  name: 'bob',
  updateName: function () {
    (function () {
      this.name = 'suzy'
    })();
  }
}
person.updateName()
console.log(person.name);

// by using the arrow function, the internal IIFE is bound to the person objects scope
const person2 = {
  name: 'bob',
  updateName: function () {
  (() => {
  this.name = 'suzy'
  })();
  }
 }
 person2.updateName()
 console.log(person2.name);

//  This is a good example as to when you should have probably used a fat arrow when passing the callback into fetchAgeFromDb. 
//  This is because we needed access to that setAge member when the age is returned from the database, 
//  but we do not have access to it when using a normal function unless we use bind or var that = this.
 const person3 = {
  age: 10,
  setAge: function (newAge) {
      this.age = newAge;
  },
  refreshAge: function (userId) {
      fetchAgeFromDb(function (newAge) {
          this.setAge(newAge);
      })
  }
}
function fetchAgeFromDb (cb) { cb(20); }
person3.refreshAge();
console.log(person3.age);

// this.prefix will not reference the expected variable in the first applyPrefix function call. 
// This is an example of when we'd want to use a fat arrow to get that reference.
function ListPrefixer (list, prefix) {
  this.list = list;
  this.prefix = prefix;
}
ListPrefixer.prototype.transform = function (cb) {
  this.list = this.list.map(cb);
}
ListPrefixer.prototype.applyPrefix = function() {
  this.transform(function (number) {
      return this.prefix + number;
  })
}
ListPrefixer.prototype.applyPrefixArrow = function() {
  this.transform((number) => {
      return this.prefix + number;
  })
}

const request = new ListPrefixer([1, 2, 3], '*');

request.applyPrefix();
console.log(request.list);
// [Nan, Nan, Nan]

request.applyPrefixArrow();
console.log(request.list);
// [*Nan, *Nan, *Nan]
