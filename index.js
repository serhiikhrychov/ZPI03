const Calc = require('./calc');

console.log("Taylor series calculator welcomes you, lets find arcsin(x)");

let members = 3;

let result = Calc.TaylorArcsinA(0.5, members);
console.log(result);