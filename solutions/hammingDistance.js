/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var r = x ^ y;
  var count = 0;

  while (r > 0) {
    if ( r & 1 === 1) count++;
    r = r >> 1;
  }
  return count
};

console.log(hammingDistance(1, 4));
