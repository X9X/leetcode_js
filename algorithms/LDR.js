/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var ldr = function(root) {
    if(!root) return;
    ldr(root.left)
    console.log(root.val);
    ldr(root.right)
}

var tree = require('./demoTree.js');
ldr(tree)
