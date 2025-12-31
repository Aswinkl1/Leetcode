/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let operator = {"+":1,"-":1,"/":1,"*":1}
    
    for(let i of tokens){
        if(operator[i]){
            let op1 = stack.pop()
            let op2 = stack.pop()
            console.log(op1)
            console.log(op2)
            if(i == "+"){
                stack.push(op2+op1)
                
            }else if(i == "-"){
                stack.push(op2 - op1)

            }else if(i == "*"){
                stack.push(op2 * op1)

            }else if(i == "/"){
                console.log("dv",op2 / op1)
                stack.push(Math.trunc(op2 / op1))
            }
                console.log(stack)
        }else{
            stack.push(+i)
        }
    }
    return stack[0]
    // console.log(stack)
};