let a = 6
fact(a)
function fact(n) {
    let arr = Array.from(Array(n+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b) =>{
        return a*b;
    })
    console.log(c)
}