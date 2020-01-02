// 인수 하나를 받는 합성 함수
// function compose(f, g) {
//     return function(x) {
//         return f(g(x));
//     };
// }

// 인수 하나 이상을 받는 합성 함수
 function compose(f, g) {
    return function() {
        return f.call(this,g.apply(this,arguments));
    };
}

var square = function(x) { return x*x; };
var add1 = function(x) { return x+1; };
var h = compose(square, add1);         // h(x) = (x+1)*(x+1)
console.log(h(2));

