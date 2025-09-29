let n = 6;
console.log(fact(n));


function fact(x) {
    if (x == 1 || x == 0) {
        return 1;
    }
    return x * fact(x-1);
}