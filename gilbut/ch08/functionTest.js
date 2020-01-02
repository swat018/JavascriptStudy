function f(x,y) {
    console.log("x = " + x + ", y = " + y);
}
f(2);

function f(x,y) {
    arguments[1]=3;
    console.log("x = " + x + ", y = " + y);
}
f(1,2);

function multiply(a,b) {
    b = b || 1;
    return a*b;
}
var result = multiply(2,3);
console.log(result);
result = multiply(2);
console.log(result);

var tom = {
    name: "Tom",
    sayHello: function() {
        console.log("Hello! " + this.name);
    }
};
tom.sayHello();

var huck = { name: "Huck"};
huck.sayHello = tom.sayHello;

huck.sayHello();

var a = "A";
function f() {
    var b = "B";
    function g() {
        var c = "C";
        console.log(a+b+c);
    }
    g();
}

f();