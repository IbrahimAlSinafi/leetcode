/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indices = []
  for (let i=0; i<nums.length; i++){
    for (let j=i +1; j<nums.length; j++){
      if (nums[i]+nums[j] === target) {
        indices = [i , j];
        i = j = nums.length; // terminate the outer loop
      }
    }
  }
  return indices;
}


// optimization 

var twoSum = function(nums, target) {
  let hash = {};
	for (let i = 0; i < nums.length; i++) {
		let thisNum = nums[i];
		hash[thisNum] = i;
	}
  for (let index=0; index<nums.length; index ++) {
    const needed = target - nums[index];
    if(hash.hasOwnProperty(needed) && hash[needed] !== index) {
      return [index, hash[needed]];
    }
  }
}