/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let result = ""
    // let i = 0
    // while(i < num.length){
    //     if(num[i] != "0"){
    //         result += num[i]
    //     }else{
            
    //         if(num[i +1] == "0" || i != 0 && num[i -1] ==  '0') {
    //             i++
    //             continue
    //         }else{
    //             result += num[i]
    //         }
    //     }
    //     i++
    // }

    // return result


    let end  = num.length -1

    while(end > 0){
        if(num[end] == "0"){
            end--
        }else{
            break
        }
    }
    console.log(end)
    
    return num.slice(0,end+1)
};