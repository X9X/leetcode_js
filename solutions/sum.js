/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  var sum = a;
  var carry = b;

  while (carry) {
    var tmps = sum;

    sum = tmps ^ carry;
    carry = (tmps & carry) << 1;
  }

  return sum;
};

console.log(getSum(10, -200));
