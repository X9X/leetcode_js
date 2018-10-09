/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root || (!root.left && !root.right)) return true;
  var left = root.left;
  var right = root.right;
  if (!(left && right)) return false;

  function isSymmetricTrees(t1, t2) {
    if (!t1 && !t2) return true;
    if (!(t1 && t2)) return false;
    if (t1.val !== t2.val) return false;
    return isSymmetricTrees(t1.left, t2.right) && isSymmetricTrees(t1.right, t2.left)
  }
  return isSymmetricTrees(left, right)
};
