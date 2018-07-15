/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/
/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let len = height.length;
    let left = [];
    let right = [];
    let water = 0;
  
    height.forEach(ele => {
      right.push(ele);
    })
  
    left.push(height[0]);
    for (let i = 1; i< len; i++){
      left.push(Math.max(left[i-1], height[i]))
    }
  
    let highest;
    for (let i = len-2; i >= 0; i--){
      highest = Math.max(right[i+1], height[i]);
      right[i] = highest;
    }
  
    // console.log('left: ', left, ' right: ', right);
    for (let i = 0; i < len; i++){
      water += Math.min(left[i],right[i]) - height[i];
    }
    return water;  
  };
  
  let number = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
  console.log('number: ', number);
  