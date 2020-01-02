var Module = Module || {};
(function(_Module) {
    var name = "NoName";                     // Private 변수
    function getName() {                     // Private 함수
        return name;
    }   
    _Module.showName = function() {         // Public 함수
        console.log(getName());
    };
    _Module.setName = function(x) {         // Public 함수
        name = x;
    };
})(Module);

Module.setName("Tom");
Module.showName();