const Arr = [ 2 , 2 , 3 , 2 , 5 , 8 , 12 , 5 , 8 ]
let repeat = Arr. reduce(function(prev, current) {

    if (prev[current]===undefined){
        prev[current]=1
    }
    else{ prev[current] = prev[current]+1
    }
    return prev

},{})
console.log(repeat)
