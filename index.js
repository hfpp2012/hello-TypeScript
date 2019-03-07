var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var List = /** @class */ (function () {
    function List(elements) {
        this.data = [];
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
var numbers = new List([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers);
// let strings: Collection<number> = new List<string>(["1, 2, 3", "2"]);
var BookList = /** @class */ (function (_super) {
    __extends(BookList, _super);
    function BookList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BookList;
}(List));
var bookList = new BookList([true, false]);
console.log(bookList);
var bookList1 = new BookList([1, 2]);
console.log(bookList1);
var MovieList = /** @class */ (function (_super) {
    __extends(MovieList, _super);
    function MovieList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MovieList;
}(List));
var movieList = new MovieList([true, false]);
console.log(movieList);
