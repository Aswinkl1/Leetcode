/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let sum = Math.ceil((nums.length *( nums.length +1)) /2)

    let res = []

    let sum1 = 0
    let fre = {}
    for(let num of nums){
        if(fre[num]){
            res.push(num)
        }else{
            fre[num] = 1
        }
        sum1 += num
    }

    res.push(sum - sum1 + res[0])
    console.log(res)
    return res
};