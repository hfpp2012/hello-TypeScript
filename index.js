// function drawShapes(shape: Shape): Shape {
// 	shape.draw();
// 	return shape;
// }
function drawShapes(shape) {
    shape.draw();
    return shape;
}
var a = {
    draw: function () { }
};
drawShapes(a);
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
var c = drawShapes(circle);
