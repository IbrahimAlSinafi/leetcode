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
//******************************************************************************************/
// Double array elements
const doubled = arr.reduce((acc, val) => {
  acc.push(val * 2);
  return acc;
}, [])
console.log('doubled: ', doubled);
//******************************************************************************************/
// Display above30 using reduce!
const above30Reduce = arr.reduce((total, amount) => {
    if (amount > 30) {
      total.push(amount);
    }
    return total;
  }, []);
  console.log('above30 using reduce:', above30Reduce);// [ 41.85, 46.5 ]
// Display above30 using filter!
  const above30Filter = arr.filter(ele => {
    if(ele > 30) return ele;
  })
  console.log('above30 using filter: ', above30Filter);
//******************************************************************************************/
/**
 * Creating a Tally with the Reduce Method In JavaScript 
 * Use it when: You have a collection of items and you want to know how many of each item are in the collection.
*/
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
  const count = fruitBasket.reduce((totally, ele) => {
    if (totally[ele]) totally[ele] +=1;
    else totally[ele] = 1
    return totally
  }, {});
  console.log('repeated fruits: ', count);
//******************************************************************************************/
//Flattening an array of arrays with the Reduce Method In JavaScript​​
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
console.log('flat: ', flat); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]