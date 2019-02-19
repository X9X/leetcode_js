/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// recursive version
var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val < val) return searchBST(root.right, val);
  return searchBST(root.left, val)
};

//no-recursive version
var searchBST = function(root, val) {
  while(root) {
    if (!root) return null;
    if (root.val === val) return root;
    root = root.val < val ? root.right : root.left;
  }
  return null
};
