/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  var getCharDic = function(str) {
    var obj = {}
    for(var i in str) {
      if (!obj[str[i]]) {
        obj[str[i]] = 1
      } else {
        obj[str[i]]++
      }
    }
    return obj
  }
  var sDic = getCharDic(s);
  var tDic = getCharDic(t);
  console.log(sDic, tDic);

  return Object.keys(tDic).every(k => sDic[k] === tDic[k]) && Object.keys(sDic).every(k => sDic[k] === tDic[k]);
};

console.log(isAnagram('a', 'b'));
