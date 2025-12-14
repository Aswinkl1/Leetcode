/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = -Infinity
    let sum = 0
    for(let i=0;i<k;i++){
        sum += nums[i]
  
    }
    maxSum = Math.max(maxSum,sum)

    for(let j=k;j<nums.length;j++){
        sum -= nums[j-k]
        sum += nums[j]
        maxSum = Math.max(maxSum,sum)
    }

    return maxSum /k 


};