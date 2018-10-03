// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function(x) {
//   var y = x;
//   var last;
//   while(y * y > x) {
//     last = y;
//     y = ~~(y / 2);
//   }
//   if (!last) return y;
//   while(y < last && (y+1) * (y+1) <= x) {
//     y++;
//   }
//   return y
// };
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  function sq(num, a, b) {
    var x = ~~((a + b) / 2);
    if (x === a) return x;
    if (x * x > num) return sq(num, a, x)
    return sq(num, x, b)
  }

  return sq(x, 0, x)
};
console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(8));
console.log(mySqrt(16));
console.log(mySqrt(25));
