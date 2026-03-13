/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const sum = nums.reduce((cur,acc) =>acc+=cur,0)
    if(sum < k) return sum
    return sum % k

   


};