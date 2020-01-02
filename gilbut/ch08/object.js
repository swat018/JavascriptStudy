function say(greetings, honorifics) {
    console.log(greetings + " " + honorifics + this.name);
} 

// apply와 call
// var tom = { name: "Tom Sawyer" };
// var becky = { name: "Becky Thatcher"};
// say.apply(tom, ["Hello!","Mr."]);
// say.apply(becky, ["Hi!","Ms."]);
// say.call(tom, "Hello!","Mr.");
// say.call(becky, "Hi!","Ms.");

// bind
var tom = { name: "Tom Sawyer" };
var sayToTom = say.bind(tom);
sayToTom("Hello","Mr.");
