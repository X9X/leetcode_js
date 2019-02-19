/**
 * @param {number} k
 * @param {number[]} nums
 */

var sort = function(nums, k) {
  for(let j = 1; j < k; j++) {
    for(let i = nums.length - 1; i > -1; i--) {
      if (nums[i - 1] < nums[i]) {
        [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]]
      }
    }
  }
  return nums
}
var KthLargest = function(k, nums) {
  this.nums = sort(nums, k);
  this.maxKElements = this.nums.slice(0, k);
  this.k = k;
};


/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.maxKElements[this.k - 1] === undefined || val > this.maxKElements[this.k - 1] ) {
    sortResult = sort([...this.maxKElements, val], 2);
    this.maxKElements = sortResult.slice(0, this.k);
  }
  return this.maxKElements[this.k - 1] || null
};
