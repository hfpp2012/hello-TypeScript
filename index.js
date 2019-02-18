// 1
var a;
a = function () {
    console.log('It work');
};
function fun() {
    return function () {
        console.log('It work');
    };
}
// 2
var c;
c = function () {
    console.log('It work');
};
// c = "xxx"
// 3
var d;
d = function (pass) {
    return pass;
};
var f = function (pass) {
    return pass;
};
var h = function (pass) { return pass; };
