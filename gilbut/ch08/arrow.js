var obj = {
    say: function() {
        console.log(this);                          // -> [Object Object]
        var f = function() { console.log(this); };  // -> [object Window]
        f();
        var g = () => console.log(this);            // -> [object Object]
        g();       
    }
};
obj.say();

var f = function() { console.log(this.name); };
var g = () => console.log(this.name);
var tom= { name: "Tom" };
f.call(tom);    // -> "Tom"
g.call(tom);    // -> ""