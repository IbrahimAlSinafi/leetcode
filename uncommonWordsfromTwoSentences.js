/*
https://leetcode.com/problems/uncommon-words-from-two-sentences/
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
 

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
 */

 /**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const finalArr = [];
  
    const hashA = A.split(' ').reduce((acc, val) => {
      if (acc[val] !== val && acc[val] !== 'duplicated') {
        return {...acc, [val]: val}
       } else {
         return {...acc, [val]: 'duplicated'}
       }
    }, {});
  
    const hashB = B.split(' ').reduce((acc, val) => {
      if (acc[val] !== val && acc[val] !== 'duplicated') {
        return {...acc, [val]: val}
       } else {
         return {...acc, [val]: 'duplicated'}
       }
    }, {});
   
    for (let key in hashA){
      if (hashA.hasOwnProperty(key) && hashA[key] !== 'duplicated' && !hashB.hasOwnProperty(key)) {
        finalArr.push(key)
      }
    }
    for (let key in hashB){
      if (hashB.hasOwnProperty(key) && hashB[key] !== 'duplicated' && !hashA.hasOwnProperty(key)) {
        finalArr.push(key)
      }
    }
    return finalArr;
  };