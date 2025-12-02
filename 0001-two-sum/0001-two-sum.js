/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        console.log(map)
        let diff = target - nums[i]
        if(map.get(diff) != null){
            return [i,map.get(diff)]
        }else{
            map.set(nums[i],i)
        }
    }
};