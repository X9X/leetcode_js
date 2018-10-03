/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//   if (nums.length === 0 ) return 0;
//   if (nums.length === 1 ) return nums[0];
//   return Math.max(nums[0] + rob(nums.slice(2)), rob(nums.slice(1)))
// };
// f(0) = 0;
// f(1) = max(nums[0], nums[1]);
// f(k) = max(f(k-2) + nums[k], f(k-1));


var rob = function(nums) {
  var last = 0, now = 0;
  for(let num of nums) {
    [last, now] = [now, Math.max(last + num, now)]
  }
  return now
};
console.log(rob([104,209,137,52,158,67,213,86,141,110,151,127,238,147,169,138,240,185,246,225,147,203,83,83,131,227,54,78,165,180,214,151,111,161,233,147,124,143]));
