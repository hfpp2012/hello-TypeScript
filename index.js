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
// 不能实例化
var Person = /** @class */ (function () {
    function Person() {
    }
    // constructor(name: string) {
    // 	this.name = name;
    // }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.empCode = code;
        return _this;
    }
    // 必须实现抽象的方法
    Employee.prototype.find = function (name) {
        return new Employee(name, 1);
    };
    return Employee;
}(Person));
var p = new Employee('hfpp2012', 1111);
var p1 = p.find("rails365");
console.log(p1);
