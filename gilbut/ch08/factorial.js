// function fact(n) {
//     if(n<=1) return 1;
//     return n*fact(n-1);
// }
var fact = function(n) {
    if(n<=1) return 1;
    return n*arguments.callee(n-1);
}

console.log(fact(5));
