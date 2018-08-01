/*
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    // one way
    // let arr = s.split('');
    // let res = '';
    // arr.reverse().forEach(ele => {
    //   res +=ele;
    // })
    // return res;
      
    // another way
    let res = '';
    let len = s.length;
    for (let i=len-1; i>=0; i--){
      res += s[i];
    }
    return res;
  };