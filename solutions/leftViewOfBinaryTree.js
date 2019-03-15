function merge (arr1, arr2) {
  return Object.assign([], arr2, arr1);
}
function leftView(root) {
  if(!root) return [];
  return [root.val, ...merge(leftView(root.left), leftView(root.right))]
}

var tree = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    right: {
      val: 4
    }
  }
}
console.log(leftView(tree));
