var basicCalc = function() {
    this.x = 0;
    this.type = "basicCalc";
};
basicCalc.prototype.add = function(y) {
    this.x = this.x + y;
    return this;
};
basicCalc.prototype.substract = function(y) {
    this.x = this.x - y;
    return this;
};
basicCalc.prototype.getAnswer = function(y) {
    return this.x;
};
basicCalc.prototype.Calculator = function(y) {
    this.x = y;
    return this;
};

var calc = function() {
    this.type = "Calculator";
};
calc.prototype = new basicCalc();
var k = new calc();

console.log(k.Calculator(2).add(2).substract(1).getAnswer());