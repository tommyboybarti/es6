// call a fct an map paramaters
function getConfig () {
  return {
    isOn: true,
    amount: 10,
    location: 'north',
    servers: {
      one: 'on',
      two: 'off'
    }
  }
}
// set properties equal to new variables
const {
  isOn,
  amount,
  // or overwrite some of them if needed
  location: geoLocation,
  servers: {
    two: server2
  }
} = getConfig();

// call the vars
isOn;
amount;
geoLocation;
server2;


// set default variables that are not declared on the original obj.
const obj = {
  running: true
}
// set vars again, with an addition of time
const {
  running: isServerOn,
  time = 1000
} = obj;

isServerOn;
time;


// EXAMPLE
const {
  name,
  age,
  gender = 'm',
  hairColor: color
} = {
  name: 'bob',
  age: 20,
  hairColor: 'blue'
}
console.log(name, age, gender, color);