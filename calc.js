module.exports.TaylorArcsinA = TaylorArcsinA;


function TaylorArcsinA(x,n) {
    let sum = x, e = 2, o = 1, p = 1;
    for (let i = 2; i <= n; i++) {

        // The power to which 'x' is raised
        p += 2;

        sum += (o / e) * (Math.pow(x, p) / p);

        // Numerator value
        o = o * (o + 2);

        // Denominator value
        e = e * (e + 2);
    }
    return sum.toFixed(10);

}



