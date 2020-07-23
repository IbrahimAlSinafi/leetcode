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
    let swap = '';
    let bool = false;
    for (let i=0; i<B.length; i++){
      if (i <= B.length -2){
        swap = B[i+1] + B[i]
        if (A.includes(swap)) {
          bool = true;
          i = B.length;
        };
      }
      return bool;
    }
  };