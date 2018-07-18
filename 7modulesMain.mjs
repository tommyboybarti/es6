// node -r @std/esm 7modulesMain.mjs
// package used for import/export in node.. 
import {
  add,
  // you can rename imports using as
  subtract as mySubtractFct
  // or use a * if you want to import everything
} from './7modulesAdd.mjs';

const value = add(1, 2);
const subtractAgain = mySubtractFct(1, 2)

console.log(
`${value}, 
${subtractAgain}`
)

// we can name the default import whatever we want
import newObj from'./7modulesAdd.mjs';
console.log(newObj)