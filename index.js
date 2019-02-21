// 上面两种定义的组合实现
function sum(x, y, z) {
    if (typeof z === 'undefined') {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
function divide(x, y) {
    if (typeof x === 'number') {
        return x / y;
    }
    else if (typeof x === 'string') {
        return [x.substring(0, y), x.substring(y)];
    }
}
var n = divide(6, 2);
console.log(n);
var s = divide("football", 3);
console.log(s);
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.divide = function (x, y) {
        if (typeof x === 'number') {
            return x / y;
        }
        else if (typeof x === 'string') {
            return [x.substring(0, y), x.substring(y)];
        }
    };
    return Util;
}());
// let a: Util = new Util();
// console.log(a.divide(6, 2));
// console.log(a.divide('hello world', 4));
var c = Util.divide(6, 2);
console.log(c);
