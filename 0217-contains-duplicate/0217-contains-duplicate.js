/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let frequency = new Set()
    for(let num of nums){
        if(frequency.has(num)){
            return true
        }else{
            frequency.add(num)
        }
    }
    console.log(frequency)
    return false

};