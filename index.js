// 函数
// 只要传过来的参数 o 有 name 属性
// o 可以是一个接口类型，这个接口类型要有 name 属性
// 定义 o 为接口类型，可以传入一个对象
var sayName = function (o) {
    // console.log(o.name);
    o.print(o.name);
};
// 对象
var person = {
    age: 27,
    name: "rails365",
    print: function (name) {
        console.log(name);
    }
};
sayName(person);
// const bottle = {
// 	litres: 1,
// 	name: "漂流瓶"
// }
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.print = function (name) {
        console.log(name);
    };
    return Person;
}());
var aPerson = new Person();
aPerson.name = "rails365";
sayName(aPerson);
// sayName(bottle);
