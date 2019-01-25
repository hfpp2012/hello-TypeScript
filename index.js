var printCallback;
printCallback = function (suc) {
    console.log("callback", suc);
};
var person = {
    first_name: "hfpp2012",
    age: 27,
    print: function (callback) {
        console.log('hello');
        callback(true);
    }
};
person.print(printCallback);
// person.first_name = "tony";
// class Programmer implements Person {
// 	first_name: string;
// }
// const programmer: Person = new Programmer();
// programmer.first_name = "tony";
// const sayName = (o: Person) => {
//  console.log(o.first_name);
// }
// sayName(programmer);
// sayName(person);
// 类型断言
// sayName({ first_name: "hfpp2012", last_name: "rails365", age: 27 } as Person)
//
// sayName({ first_name: "hfpp2012", lassst_name: "rails365", age: 27 })
