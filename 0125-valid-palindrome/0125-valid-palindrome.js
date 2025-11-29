/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alpha = new  Set(["a","b","c","d","e","f","g","h","i",'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'])
//    let pal = s.split(" ").join("").toLowerCase()

   let res =""
   for(let ch of s.toLowerCase()){
        console.log(ch)
    if(alpha.has(ch)){
        res+= ch
    }
   }

   let rev = res.split("").reverse().join("")
   console.log(res,rev)
   return rev == res
};