const Arr = [ 2 , 2 , 3 , 2 , 5 , 8 , 12 , 5 , 8 ]
function item(Arr){
    let obj = { }
    for (let i of Arr){
        if (obj[i]) {
            obj[i]++
        }
        else obj[i] = 1
    }
    return obj
}
console.log(item(Arr))


