/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return new Array(n).fill(0).map((v, index) => {
    var num = index + 1;
    if (num % 15 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return String(num)
  })
};

console.log(fizzBuzz(15));
