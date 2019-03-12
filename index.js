function createInstance(t) {
    return new t();
}
var Test = /** @class */ (function () {
    function Test() {
        this.x = 4;
        // constructor(x: number) {
        // }
    }
    return Test;
}());
// let test: Test = new Test();
var test = createInstance(Test);
console.log(test);
function createInstance2(t) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new t(args);
}
var Test2 = /** @class */ (function () {
    function Test2(x) {
        this.x = x;
    }
    return Test2;
}());
// new Test2(3);
var test2 = createInstance2(Test2, 3, 5);
console.log(test2);
