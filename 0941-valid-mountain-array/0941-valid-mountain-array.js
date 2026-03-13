/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    
    let isDecreasing = false
    let isIncreasing = true
    if(arr.length <3) return false
    if(arr[1] < arr[0] ) return false
    for(let i=1;i<arr.length;i++){
        
        if(arr[i] == arr[i-1]) return false
        if(isDecreasing){
            
            if(arr[i] >= arr[i-1]){
                return false
            }
        }else{
        if(arr[i] < arr[i-1]){
            isDecreasing = true
            isIncreasing = false
        }

        }
    }
    if(isDecreasing ==false || isIncreasing) return false
    return true
};