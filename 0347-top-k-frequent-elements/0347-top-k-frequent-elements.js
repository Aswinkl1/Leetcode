/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    // let bucket = new Array(nums.length +1 ).fill(new Array())
    let bucket = Array.from({length:nums.length +1},()=>[])
    for(let num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1 )
        }else{
            map.set(num,1)
        }
    }

    for(let i of map){
        bucket[i[1]].push(i[0])
    }

console.log(bucket)
let res = []
  for(let i=bucket.length -1;i>0;i--){
 
    for(let j of bucket[i]){
        res.push(j)
        if(res.length ==k){
            return res
        }
    }


    
   
  }

  
    

    
   
    
    
};