/*
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

Example 1:

Input: A = "ab", B = "ba"
Output: true
Example 2:

Input: A = "ab", B = "ab"
Output: false
Example 3:

Input: A = "aa", B = "aa"
Output: true
Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:

Input: A = "", B = "aa"
Output: false
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  let arr = [...A]; // makes it an array for easy swapping
  let swap = '';
  let bool = false;
  for (let i=0; i<arr.length; i++){
    if (i <= arr.length -2){ // don't swap once you reach last character!
      swap = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = swap
      let stringA = arr.join('') // put it back as a string
      if (stringA === B) {
        console.log('in')
        bool = true;
        i = arr.length;
      } else{ // reset the arr characters to precede with swapping
        arr = [...A]
      }
    }
  }
  return bool;
}