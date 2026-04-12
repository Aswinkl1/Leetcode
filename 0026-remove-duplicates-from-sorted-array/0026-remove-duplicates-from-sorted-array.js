/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // since it is sorted you dont need to use seen
    // let seen = {}
    // for(let i=0;i<nums.length;i++){
    //     // console.log(seen[nums[i]])
    //     if(seen[nums[i]]){
    //         nums.splice(i,1)
    //         i--
    //     }
    //         seen[nums[i]] = true
    // }
    // return nums.length
    let k = 0
    for(let i=1;i<nums.length;i++){
        if(nums[k] !== nums[i]){
            nums[k+1] = nums[i]
            k++
        }
    }

    return k +1
};