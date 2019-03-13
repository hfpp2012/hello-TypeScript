"use strict";
exports.__esModule = true;
// import { Shape, drawShapes } from './classes';
var c = require("./classes");
var a = {
    draw: function () { }
};
c.drawShapes(a);
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
var d = c.drawShapes(circle);
