/**
 * @param {string} s
 * @return {number}
 */
 /**
  * @param {string} s
  * @return {number}
  */
 var lengthOfLongestSubstring = function(s) {
     if (s.length < 2) {
         return s.length;
     }
     var max = 0;
     var start = -1;
     var map = {};
     for (var i = 0; i < s.length; i++) {
         var t = map[s[i]];
         if (t !== undefined) {
             start = Math.max(start,t);
         }
         map[s[i]] = i;
         max = Math.max(max, i - start)
     }
     return max
 };
