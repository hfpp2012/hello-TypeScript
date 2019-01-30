// interface Person {
// 	// 只读，不可修改
// 	readonly first_name: string
// 	last_name?: string
// 	print(callback: PrintCallback): void
// 	// 后面会讲
// 	[propName: string]: any;
// }
// x 代表可以是任何类型，比如字符串 number 之类的
var x = "hi there";
// x 可以是任何类型，编译器可能不能明确知道 x 是哪种类型
// <string> 表示把 x 断言成字符串类型，就是告诉编译器要把 x 当成字符串，这样
// 就可以调用 substring 函数，因为字符串才有这个函数
var s = x.substring(0, 3);
console.log(typeof s);
// 编译器可能不知道明确的类型，因为可以是两者之一
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
    // return something.length
}
// 另一种类型断言的方式 as
var person = {};
person.name = "rails365";
person.age = 27;
// 一种写法
var person1 = {
    name: "rails365",
    age: 27
};
// interface PrintCallback {
// 	// 可以简单理解为匿名函数
// 	(success: boolean): void
// }
// let printCallback: PrintCallback;
// printCallback = (suc: boolean): void => {
// 	console.log("callback", suc);
// }
// let person: Person = {
// 	first_name: "hfpp2012",
// 	age: 27,
// 	print: (callback: PrintCallback): void => {
// 		console.log('hello');
// 		callback(true);
// 	}
// }
// person.print(printCallback);
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
