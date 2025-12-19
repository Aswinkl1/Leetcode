/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = []
    for(let i=0;i<nums.length;i++){
        let s = "" + nums[i]
        for(let c of s ){
            ans.push(+c)
        }

    }
    return ans
};