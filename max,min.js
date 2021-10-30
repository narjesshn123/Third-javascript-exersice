let numbers = [2,-5,8,1,22,94]
const Max = numbers.reduce(function (a,b){
    if (a>b){
        return a
    }
        return b
    }
)
const Min = numbers.reduce(function (a,b){
    if (a<b){
        return a
    }
        return b

})
console.log([Min , Max])
