/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = {}
    for(let i=0;i<nums.length;i++){
        console.log(seen[nums[i]])
        if(seen[nums[i]]){
            nums.splice(i,1)
            i--
        }
            seen[nums[i]] = true
    }
    return nums.length
};