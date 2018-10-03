/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   // n = 2x + y
//   var max_x = ~~(n/2);
//   var sum = 0;
//   var y;
//   var f = function (start, count) {
//     var product = 1;
//     while (count > 0) {
//       product = product * start;
//       count--;
//       start--;
//     }
//     return product
//   }

//   for(var x = 0; x <= max_x; x++) {
//     y = n - 2 * x;
//     var v = f(x + y, x) / f(x, x);

//     sum += v;
//   }
//   return sum;
// };

// console.log(climbStairs(1));
// console.log(climbStairs(2));
// console.log(climbStairs(3));
var climbStairs = function(n) {
  if (n <= 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
console.log(climbStairs(3));
