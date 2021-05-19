const Calc = require('./calc');

console.log("Taylor series calculator welcomes you, lets find arcsin(x)");

let result = Calc.TaylorArcsinA(0.5, 3);
console.log(result);