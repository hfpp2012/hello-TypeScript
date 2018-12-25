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
// 模板
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log('hi');
    };
    Person.prototype.othergreet = function () {
        this.greet();
        console.log('*****');
    };
    return Person;
}());
// 继承成了父类的数据和行为，就是属性和方法
// 它的父类就是 Person
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log('hello world');
    };
    // super 代表父类
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
// let aProgrammer: Person = new Programmer();
var aProgrammer = new Person();
// 调用方法时，先找自己本身对象的方法，如果没有，会找父类的
// aProgrammer.greet();
// aProgrammer.greetLikeNormalPeople();
aProgrammer.othergreet();
// 生成一个对象
// let aPerson = new Person();
// 设置 firstName 的内容
// aPerson.firstName = "rails365";
// aPerson.othergreet();
// 读取 firstName 的内容
// console.log(aPerson.firstName);
