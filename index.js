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
    // static all() {
    // 	// Person 对应数据库的一个表模型
    // 	// 可以列出 persons 表的所有记录
    // 	// new 出来的可能是一条记录，要找到所有记录，可能要通过静态方法
    // 	return Person.select().all();
    // }
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 静态的方法
    Person.getStaticAge = function () {
        return "my age is " + Person.age;
    };
    Person.prototype.getAge = function () {
        return "my age is " + Person.age;
    };
    Person.prototype.greet = function () {
        console.log('hi');
    };
    Person.prototype.sayHi = function () {
        console.log('private say hi');
    };
    Person.prototype.callSayHi = function () {
        this.sayHi();
        console.log('********');
    };
    // public
    // get 方法
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    // public
    // set 方法
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.othergreet = function () {
        this.greet();
        console.log('*****');
    };
    // 静态属性
    Person.age = 10;
    return Person;
}());
// public 的 getStaticAge
// console.log(Person.getStaticAge());
// console.log(Person.getStaticAge());
// let aPerson = new Person("rails365", "hfpp2012");
// console.log(aPerson.getAge())
// 相当于 set 方法
// aPerson.firstName = "rails365"
// 相当于 get 方法
// console.log(aPerson.firstName);
// aPerson.setFirstName("hfpp2012");
// aPerson.getFirstName();
// aPerson.sayHi();
// aPerson.callSayHi();
// 继承成了父类的数据和行为，就是属性和方法
// 它的父类就是 Person
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName) {
        var _this = 
        // 调用父类的构造函数的方法，要传入参数
        _super.call(this, firstName, lastName) || this;
        console.log("Programmer constructor");
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log('hello world');
    };
    Programmer.getSuperAge = function () {
        return "super age is " + Programmer.age;
    };
    // super 代表父类
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    // 子类定义的方法
    // public getFullName(): string {
    //  return `${this.firstName} ${this.lastName}`;
    // }
    // 自己定义的方法
    // getFirstName protected
    Programmer.prototype.getSuperFirstName = function () {
        return this.getFirstName();
    };
    Programmer.prototype.getSuperLastName = function () {
        return this.lastName;
    };
    // 可以访问继承过来的 private 属性
    // getFirstName 和 getLastName 是继承过来
    // public getFullName(): string {
    //  return `${this.getFirstName()} ${this.getLastName()}`;
    // }
    Programmer.prototype.getFullName = function () {
        return this.getSuperFirstName() + " " + this.getSuperLastName();
    };
    return Programmer;
}(Person));
// getSuperAge 是子类定义的方法
console.log(Programmer.getSuperAge());
// let aProgrammer = new Programmer("rails365", "hfpp2012");
// console.log(aProgrammer.firstName);
// 继承过来的方法
// aProgrammer.getFirstName();
// console.log(aProgrammer.getFullName());
// console.log(aProgrammer.getFirstName());
// console.log(aProgrammer.getSuperFirstName());
