/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1)
let len = nums.length
    let prefix = [nums[0]]
    let postfix = new Array(nums.length).fill(1)
postfix[len-1] = nums[len -1]
    for(let i=1;i<nums.length;i++){
        prefix[i] =  prefix[i-1] * nums[i]
    }

    for(let i=nums.length-2;i>=0;i--){
        postfix[i] = postfix[i+1]* nums[i]
    }
    console.log(postfix)
    console.log(prefix)
    result[0] = postfix[1]
    result[nums.length-1] = prefix[nums.length-2]
    for(let i=1;i<nums.length -1;i++){
        result[i]=(postfix[i+1] * prefix[i-1])
    }

    return result
    

    



    

    
};