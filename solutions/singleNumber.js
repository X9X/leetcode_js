/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((r, a) => a ^ r);
};

console.log(singleNumber([1,2,1, 2, 0]));
