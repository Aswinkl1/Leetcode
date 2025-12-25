/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum =0
    for(let i=0;i<s.length;i++){
        if(s[i] && s[i+1]){
            let c = s[i].charCodeAt()
            let b = s[i+1].charCodeAt()
            sum += Math.abs(c-b)
        }
    }
    return sum
};