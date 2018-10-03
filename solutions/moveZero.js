/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var i = 0,  end = nums.length;
  for(var count = 0; count < end; count++) {
    if(nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    } else {
      i++
    }
  }
};

var b = [0,0,1];
moveZeroes(b)
console.log(b);
