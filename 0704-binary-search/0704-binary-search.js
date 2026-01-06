/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binary(target,l,r){
        
        if(l >r){
            return -1
        }
        let mid = l + Math.floor((r-l)/2)
        console.log(mid)
        if(nums[mid] == target){
            return mid
        }

        if(nums[mid] > target){
            r = mid -1
        }else{
            l = mid +1
        }

       return  binary(target,l,r)
        
        
    }
   return binary(target,0,nums.length-1)
    
};