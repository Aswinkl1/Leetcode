/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let res = new Map()

    for(let str of strs){
        let count = new Array(26).fill(0)

        for(let s of str){
            count[s.charCodeAt() - 97]++
        }
       let key = count.join(".")
        if(res.has(key)){
            res.get(key).push(str)
        }else{
            res.set(key,[str])
        }

    }
    return Array.from(res.values())
    
};