// const & let

let largestString = '';
const strings = ['asdf', 'asdfa', 'drqwrwef']

function findLargestString(strings) {
    // set largestString to point to the 
    // longest string found in the strings array passed in
    strings.forEach(function(strings) {
        if (strings.length > largestString.length) {
            largestString = strings
        }
    })
    console.log(largestString)
}
findLargestString(strings)


// block scope
const run = true;
let name = 'bob';
if (run) {
    let name = 'charley'
    console.log(name);
}
console.log(name);


// function scope
const MAX = 5;
 
for (var i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}
 
for (let i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

for (let i = 0; i < MAX; i++) {
      console.log(i);
  }
