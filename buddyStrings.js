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
  if (A == "" || B == "" || A.length !== B.length) return false;
  if (A == B) {
      let set = new Set(A);
      return set.size !== A.length;
  }
  let a = "", b = "";
  for (i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
          a += A[i];
          b += B[i];
      } 
  }
  if (a.length == 2 && a.length == b.length) {
      return a[0] == b[1] && a[1] == b[0];    
  } 
  return false; 
};