/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2) {
  var index = 0;
  var count = 0;

  nums1.splice(m);
  function findIndex(num) {
    while (index < m + count && nums1[index] < num) {
      index++;
    }
    return index;
  }
  nums2.forEach(num => {
    let index = findIndex(num);
    nums1.splice(index, 0, num);
    count++;
  })
};

var a1 = [1,2,3,0,0,0];
var a2 = [2,5,6];
merge(a1, 3, a2, 3)

console.log(a1);
