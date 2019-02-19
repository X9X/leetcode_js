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
    var ele = nums[i];
    if (!info[ele]) {
      info[ele] = {
        count: 1,
        start: i,
        end: i
      }
    } else {
      info[ele].count += 1;
      info[ele].end = i;
    }
    if (degree < info[ele].count) {
      degree = info[ele].count;
      result = info[ele].end - info[ele].start + 1;
    } else if (degree === info[ele].count) {
      result = Math.min(info[ele].end - info[ele].start + 1, result);
    }

  }

  return result
};

console.log(findShortestSubArray([2,1,1,2,1,3,3,3,1,3,1,3,2]));
