const Calc = require('./calc');

console.log("Taylor series calculator welcomes you, lets find arcsin(x)");

let members = 3;

let result = Calc.TaylorArcsin(0.5, members);
console.log(result);
