/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  if (nums.length <= 1) return nums.length;
  var degree = -1;
  var info = new Array(50000);
  var result = 50000;

  for(var i = 0, len = nums.length; i < len; i++) {
    if (!info[nums[i]]) {
      info[nums[i]] = {
        count: 1,
        start: i,
        end: i
      }
    } else {
      info[nums[i]].count += 1;
      info[nums[i]].end = i;
    }
    if (degree < info[nums[i]].count) {
      degree = info[nums[i]].count;
      result = info[nums[i]].end - info[nums[i]].start + 1;
    } else if (degree === info[nums[i]].count) {
      result = Math.min(info[nums[i]].end - info[nums[i]].start + 1, result);
    }

  }

  return result
};

console.log(findShortestSubArray([2,1,1,2,1,3,3,3,1,3,1,3,2]));
