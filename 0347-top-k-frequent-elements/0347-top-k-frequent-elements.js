/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            // map.get(num) += 1
            map.set(num,map.get(num)+1 )
        }else{
            map.set(num,1)
        }
    }

    let val = Array.from(map.values()).sort((a,b)=>b-a).slice(0,k)
    let res = []
    console.log(Array.from(map.values()).sort((a,b)=>b-a))
    for(let i of map){
        console.log(i)
        if(val.includes(i[1])){

        res.push(i[0])
        }
    }

    return res
   
    
    
};