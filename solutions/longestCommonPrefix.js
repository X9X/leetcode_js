/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var i = 0;
  var flag = true;
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  outer: while (flag) {
    for(let j = 0, len = strs.length; j < len; j++) {
      if (!strs[j][i] || strs[j][i] !== strs[0][i]) {
        flag = false;
        break outer;
      }
    }
    i++;
  }
  return strs[0].substr(0, i);
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
