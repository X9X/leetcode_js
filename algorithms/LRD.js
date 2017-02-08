/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var lrd = function(root) {
    let pointer = root;
    if(!root) return;
    lrd(root.left)
    lrd(root.right)
    console.log(root.val);
}

var tree = require('./demoTree.js');
lrd(tree)
