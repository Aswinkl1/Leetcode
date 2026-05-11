/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let res = []
    for(let i of matrix){
        let len = i.filter(v=>v ==1).length
        res.push(len)
    }
    return res
};