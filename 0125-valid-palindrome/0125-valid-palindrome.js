/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let st = 0
    let end = s.length -1
    while(st < end){
        while(st < end && !isAlphaNum(s[st])){
            st++
        }

        while(st < end && !isAlphaNum(s[end])){
            end--
        }

        if(s[st].toLowerCase() != s[end].toLowerCase()){
            return false
        }
        st++
        end--
    }
    return true

    function isAlphaNum(c){
        return ((c >="a" && c<="z")||
        (c >= "A" && c <="Z")||
        (c >= "0" && c <= "9"))
    }
};