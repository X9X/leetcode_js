/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var dlr = function(root) {
    if(!root) return;
    console.log(root.val);
    dlr(root.left)
    dlr(root.right)
}

var tree = require('./demoTree.js');
dlr(tree)
