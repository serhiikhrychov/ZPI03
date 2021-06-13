const assert = require('assert');
const Calc = require('./calc');

//test
describe('Taylor series', function () {
    let sum = Calc.TaylorArcsinA(0.5, 3)
    it('should have a Taylor function defined', function(){
        assert.equal(typeof Calc.TaylorArcsinA, "function");
    });
    it('Has to be equal to 0.5231770833 if members are 3', function () {
        assert.equal(sum, 0.5231770833);
    })
});





