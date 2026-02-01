/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let min1 = nums[0]
    nums.splice(0,1)
        let min2 = Math.min(...nums)
        nums.splice(nums.indexOf(min2),1)
    let min3 = Math.min(...nums)
    nums.splice(nums.indexOf(min2),1)
    return min1 + min2 + min3


};