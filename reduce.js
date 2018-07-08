// https://medium.freecodecamp.org/reduce-f47a7da511a9
/**
 * A Basic Reduction
 * Use it when: You have an array of amounts and you want to add them all up.
 */
let sum = '';
const arr = [29.76, 41.85, 46.5];
  sum = arr.reduce(function(acc, val){
    return acc + val
})
console.log('sum using normal function: ', sum); // 118.11

function callBack(acc, val) {return acc + val}
    sum = arr.reduce(callBack)
console.log('sum using call back function: ', sum); // 118.11

// using es6
    sum = arr.reduce((total, amount) => total + amount); 
console.log('sum using es6 syntax: ', sum); // 118.11
//******************************************************************************************/

/**
 * Finding an Average with the Reduce Method In JavaScript​
 */
const average = arr.reduce((acc, val, index, arr) => {
  acc += val;
  if (index === arr.length -1){
    return acc/arr.length;
  }else {
    return acc
  }
}, 0);
console.log('average: ', average);