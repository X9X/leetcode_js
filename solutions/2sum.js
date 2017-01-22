/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var length = nums.length;
    for(var i = 0; i<length ; i++){
        for(var j = 0; j < length; j++){
            if(i === j) continue;
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};
