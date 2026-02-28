/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let obj = {}
    let result = []
    for(let key of arr1){
        if(obj[key]){
            obj[key] += 1
        }else{
            obj[key] = 1
        }
    }

    for(let val of arr2){
        let count = obj[val]

        for(let i =0;i<count;i++){
            result.push(val)
        }
        delete obj[val]

    }
    console.log(obj)
    let remain = Object.keys(obj)
    for(let key in obj){
        const count = obj[key]
        for(let i =0;i<count;i++){
            result.push(Number(key))
        }
                delete obj[key]
    }
    // result.push(Number(...Object.keys(obj)))
    return result
};