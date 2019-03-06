var List = /** @class */ (function () {
    function List(elements) {
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
var numbers = new List([1, 2, 3, 4]);
numbers.add(5);
numbers.remove(3);
var numArray = numbers.asArray();
console.log(numArray);
var fruits = new List(['apple', 'banana', 'orange']);
fruits.add('mango');
fruits.remove('apple');
var fruitArray = fruits.asArray();
console.log(fruitArray);
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this._first = first;
        this._second = second;
    }
    Object.defineProperty(Pair.prototype, "first", {
        get: function () {
            return this._first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pair.prototype, "second", {
        get: function () {
            return this._second;
        },
        enumerable: true,
        configurable: true
    });
    return Pair;
}());
var pair = new Pair(true, "111");
console.log(pair.first);
console.log(pair.second);
