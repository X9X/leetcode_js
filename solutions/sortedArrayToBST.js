/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  var rootIndex = Math.floor(nums.length / 2);
  var root = new TreeNode(nums[rootIndex]);
  root.left = sortedArrayToBST(nums.slice(0, rootIndex))
  root.right = sortedArrayToBST(nums.slice(rootIndex + 1));
  return root
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));
