/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max_area = 0
    let l = 0
    let r = height.length -1
    while(l < r){
        let min = Math.min(height[l],height[r]) 
        let area = (r-l) * min

        if(max_area < area){
            max_area = area
        }

        if(height[l] == min){
            l++
        }else{
             r--
        }
    }

    return max_area
};