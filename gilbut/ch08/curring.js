var pow = function(exponent) {
    return function(base) {
        return Math.pow(base, exponent);
    };
};

var square = pow(2);
var sqrt = pow(.5);
var cubicroot = pow(1/3);

console.log("square(2) =", square(2));
console.log("sqrt(2) =", sqrt(2));
console.log("cubicroot(2) =", cubicroot(2));

var sum = function(a,b) { return a+b;};
var a = [1,2,3,4];
var abs_a = pow(.5)(a.map(pow(2)).reduce(sum));
console.log(abs_a);