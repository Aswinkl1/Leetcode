/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let arr1 = []
    let fre = {}
    for(let i of arr){
        if(fre[i]){
            fre[i] +=1
        }else{
            fre[i] = 1
        }
    }

    for(let i in fre){
        if(i == fre[i]){
            arr1.push(i)
        }
    }
  
    if(arr1.length == 0){
        return -1
    }
    // console.log(Math.max(...arr1))
    return Math.max(...arr1)
};