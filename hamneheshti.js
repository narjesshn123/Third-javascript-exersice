const hamNeHeSht = (a,b) => {
    let x = (Math.abs(b-a)) ;
    let arr = [];
    for (let i = a+1 ; i <b ; i++) {
        if (x % i === 0) {
            arr.push(i)
        }
    }
    return arr
}
console.log(hamNeHeSht(1 , 25))
