/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var obj = {};
  for(let i in s) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = +i
    } else {
      obj[s[i]] = -1
    }
  }
  console.log(obj);
  var indexes = Object.values(obj);
  if (indexes.length <= 0) return -1;
  if (indexes.length === 1) return indexes[0];
  return indexes.reduce((r, num) => {
    if (num > -1 && (r === -1 || num < r)) r = num;
    return r
  })
};

console.log(firstUniqChar("cc"));
