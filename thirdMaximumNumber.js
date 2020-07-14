/**
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(arr) {
  let first = arr[0]; 
  for (let i = 1; i < arr.length ; i++) 
      if (arr[i] > first) 
          first = arr[i]; 

  // Find second largest element 
  let second = -1.7976931348623157; 
  for (let i = 0; i < arr.length ; i++) 
      if (arr[i] > second && arr[i] < first) 
          second = arr[i]; 

  // Find third largest element 
  let third = -1.7976931348623157; 
  for (let i = 0; i < arr.length ; i++) 
      if (arr[i] > third && arr[i] < second) 
          third = arr[i]; 

  console.log(first, second, third)
  return (third === -1.7976931348623157)? first: third;
};

console.log(thirdMax([2, 2, 3, 1]))