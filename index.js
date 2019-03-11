function drawShapes(shapes) {
    shapes.forEach(function (shape) { return shape.draw(); });
}
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("drawing Circle");
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        console.log('drawing Rectangle');
    };
    return Rectangle;
}());
var circle = new Circle();
var rectangle = new Rectangle();
drawShapes([circle, rectangle]);
// K keyof T, extends
function getProp(key, obj) {
    return obj[key];
}
var obj = { a: 2, b: 3, c: 4 };
var prop = getProp('c', obj);
