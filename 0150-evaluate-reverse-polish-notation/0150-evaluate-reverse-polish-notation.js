/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let res = []

    for(let tok of tokens){
        
        if(+tok <= 0 || +tok >=0){
            // console.log(tok)
            res.push(parseInt(tok))
            continue
        }
        let op1 = res.pop()
        let op2 = res.pop()
        if(tok == "+"){
            res.push(op2+op1)
        }else if(tok == "-"){
            res.push(op2 - op1)
        }else if (tok == "/"){
            res.push(parseInt(op2 / op1))
        }else{
            res.push(op2 * op1)
        }

    }
    // console.log(res)
    return res.pop()
};