function stringToArray(s) {
    return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFFF]/g) || [];
}

var a = stringToArray("📖 모던 자바스크립트 입문");
console.log(a);