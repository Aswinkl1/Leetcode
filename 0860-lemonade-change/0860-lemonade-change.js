/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
    let balance = {5:0,10:0,20:0}
    for(let bill of bills){
        let ret = bill - 5
        if(ret !=0 && balance[ret]){
            balance[ret] -= 1
            balance[bill] += 1
            continue
        }

        if(ret == 15){
            if(balance[10]){
                balance[10] -= 1
                ret -= 10
            }
        }

        if(ret <= balance[5] * 5){
            while(balance[5] && ret !=0){
                balance[5] -= 1
                ret -= 5
            }
        
        }
        if(ret != 0){
           return false
        }
        balance[bill] += 1
    }

    return true
};