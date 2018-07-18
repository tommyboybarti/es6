// no need for /n to set line breaks or space in between a string
// multi-line template literals will include spaces and insert a new line character which obviously isn't printed to the console
const name1 = 'Tom'
const message1 = `Hi my name is
${name1},        and I am 
311`

console.log(message1);

// emphasize expressions, for building html templates etc.
function tag(strings, ...values) {
  // string becomes an array
  console.log(strings);
  // expressions are in an array as well
  console.log(values);
  
  let message = '';
  // loop over string
  strings.forEach((string, index) => {
    message += string;
    if (index < values.length) {
      // create template literal for the em tags
      message += `<em>${values[index]}</em>`
    }
  })
  return message;
}
const name = 'bob';
const age = 20;
const message = tag`hello my name is ${name}. my age is ${age}`;
console.log(message);

// EXAMPLES:
// the tag function is simply taking the input string and replacing all spaces with an underscore
function underscore (strings, ...values) {
  return strings[0].replace(/\s/g, '_');
}
const messageU = underscore`there      is no cow level`
console.log(messageU);

// one more
function error (strings, err) {
  error = `status: ${err.status}, message: ${err.messageE}`
  return `${strings[0]}{${error}}`
}
const err = {
  messageE: 'oh no, an error!',
  status: 404
}
const messageE = error`An error has occurred: ${err}`
console.log(messageE);
