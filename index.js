// class Person {
// 	private _name: string;
// 	private _age: number;
// 	constructor(name: string, age: number) {
// 		this._name = name;
// 		this._age = age;
// 	}
// }
// class Person {
// 	constructor(private _name: string, private _age: number) {
// 	}
// }
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    // 读取
    Person.prototype.getName = function () {
        return this._name;
    };
    // 设置
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person("hfpp2012", 29);
// 输出 name
console.log(p.name);
// console.log(p.getName());
// 修改 name
p.name = 'rails365';
// p.setName("rails365");
console.log(p);
