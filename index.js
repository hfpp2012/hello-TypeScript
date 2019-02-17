var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.w = w;
        this.h = h;
    }
    Rectangle.prototype.getAreaFunction = function () {
        var _this = this;
        return function () {
            return _this.w * _this.h;
        };
    };
    return Rectangle;
}());
var rectangle = new Rectangle(2, 5);
// 返回 function
var areaFunction = rectangle.getAreaFunction();
// 得到面积
// this 是指向 rectangle 这个对象，还是调用的上下文
var area = areaFunction();
console.log(area);
