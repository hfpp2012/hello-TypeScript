var p = {
    age: 27,
    name: "rails365"
};
// 类不能继承多个类，也就是说不能有多个父类
// 但可以实现多个接口
// 每个接口的属性和方法都要实现
var P = /** @class */ (function () {
    function P() {
    }
    return P;
}());
var p1 = {
    name: "rails365",
    age: 25
};
var p2 = p1;
var p3 = p1;
