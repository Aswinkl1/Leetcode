/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let fre = {}
    let res = false
   for(let i =0;i<nums.length;i++){
    if(fre[nums[i]] != undefined){
        let abs = Math.abs(i - fre[nums[i]])
        console.log(abs,i)
        if(abs <= k){
            res = true
        }
                fre[nums[i]] = i

    }else{
        fre[nums[i]] = i
    }
   }
   console.log(fre)
   return res
};