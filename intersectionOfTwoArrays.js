/**
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr1 = [];
    let arr2 = [];
      if (nums1 < nums2) {
        arr1 = nums1;
        arr2 = nums2;
      } else {
        arr1 = nums2;
        arr2 = nums1;
      }
  
      // arr1 => start off with smaller arrary
      return arr1
        .filter(ele => arr2.includes(ele))
        .reduce((acc, val) => acc.includes(val)? acc: [...acc, val], []);
  };