/**
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
 */

var topKFrequent = function(nums, k) {
    let list = nums.reduce((acc, val) => {  // create hash table
      acc[val]? acc[val]++: acc[val] = 1;
      return acc;
    }, {});
    return Object
      .keys(list)
      .sort((a,b) => list[b]-list[a]) // sort obj keys based on obj values
      .map(ele => parseInt(ele))  // parseInt obj keys
      .splice(0, k) // remove all elements after k starting from index 0, 
};