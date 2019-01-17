var person = {
    first_name: "hfpp2012",
    age: 27
};
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    return Programmer;
}());
var programmer = new Programmer();
programmer.first_name = "tony";
var sayName = function (o) {
    console.log(o.first_name);
};
sayName(programmer);
// sayName(person);
// 类型断言
sayName({ first_name: "hfpp2012", last_name: "rails365", age: 27 });
//
sayName({ first_name: "hfpp2012", lassst_name: "rails365", age: 27 });
