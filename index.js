// 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function foo(x, y, z) {
    console.log(x, y, z);
}
var args = [0, 1, 2];
// foo.apply(null, args);
// foo.apply(void 0, args);
foo.apply(void 0, args);
// 2
function foo1() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(JSON.stringify(x));
}
foo1.apply(void 0, args);
foo1(1, 2, 3);
function foo2(x, y, z) {
    console.log(x, y, z);
}
foo2.apply(void 0, args);
foo2(1, 2, 3);
// Destructuring
var _a = [1, 2, 3, 4], x = _a[0], y = _a[1], remaining = _a.slice(2);
console.log(x, y, remaining);
// Array Assignment
var list = [1, 2];
list = list.concat([3, 4]);
console.log(list);
// Object spread
var point2D = { x: 1, y: 2 };
var point3D = __assign({}, point2D, { z: 3 });
console.log(point3D);
var anotherPoint3D = __assign({ x: 5, z: 4 }, point2D);
console.log(anotherPoint3D);
var yetAnotherPoint3D = __assign({}, point2D, { x: 5, z: 4 });
console.log(yetAnotherPoint3D);
var foo4 = { a: 1, b: 2, c: 0 };
var bar = { c: 1, d: 2 };
var fooBar = __assign({}, foo4, bar);
console.log(fooBar);
//
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (t) {
        this.data.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List(1, 2, 3, 4);
numbers.add(5);
numbers.remove(3);
var numArray = numbers.asArray();
console.log(numArray);
var fruits = new List('apple', 'banana', 'orange');
fruits.add('mango');
fruits.remove('apple');
var fruitArray = fruits.asArray();
console.log(fruitArray);
