/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let maxSum = 0
    const n = grid[0].length
    for(let i=0 ;i<n;i++){
        let maxAr = []
        // console.log(i)
        for(let row of grid){
            // console.log(grid)
            let max = Math.max(...row)
            // console.log(max)
            maxAr.push(max)
            
            row.splice(row.indexOf(max),1)
        }
        maxSum += Math.max(...maxAr)

    }
    return maxSum
};