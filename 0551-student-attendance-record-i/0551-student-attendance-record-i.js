/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let fre = {}
    let late = []
    for(let ch of s){
        if(ch == "A"){
            if(fre[ch]){
                fre[ch] += 1
            }else{
                fre[ch] = 1
            }
        } 
        if(fre["A"] >=2) return false
        if(ch == "L"){
            late.push(ch)
            if(late.length == 3){
                return false
            }
        }else{
            late = []
        }
    }

    return true
};