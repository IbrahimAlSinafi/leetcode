/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ""
    if(strs === null || strs.length === 0) return prefix

    for (let i=0; i < strs[0].length; i++){ 
        const char = strs[0][i] // loop through all characters of the very first string. 

        for (let j = 1; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
}