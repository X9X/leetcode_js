/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var digits = ('' + x).split('');
    var isPositive = true;
    if(digits[0] === '-'){
        isPositive = false;
        digits = digits.splice(1)
    }
    var number = parseInt(digits.reverse().join(''),10);
    return isPositive ? number : 0 - number;
};
