/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr1 = nums1.length >= nums2.length ? nums1 : nums2;
    var arr2 = nums1.length >= nums2.length ? nums2 : nums1;
    var min1 = arr1[0];
    var max1 = arr1[arr1.length - 1];
    var min2 = arr2[0];
    var max2 = arr2[arr2.length - 1];
    var totalLength = arr1.length + arr2.length;
    if(min1 > max2 || min2 > max1) return totalLength % 2 === 0 ? (arr1[arr1.length - totalLength / 2] + arr1[arr1.length - totalLength / 2 + 1]) / 2 : arr1[arr1.length - totalLength / 2]
};
