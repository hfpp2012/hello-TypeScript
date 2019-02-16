// 不能实例化
abstract class Person {
	abstract name: string;

	// constructor(name: string) {
	// 	this.name = name;
	// }

	display(): void {
		console.log(this.name);
	}

	// 抽象的方法
	// 没有方法体
	abstract find(string): Person;
}

class Employee extends Person {
	name: string;
	empCode: number;

	constructor(name: string, code: number) {
		super(); // 必须调用 super
		this.name = name;
		this.empCode = code;
	}

	// 必须实现抽象的方法
	find(name: string): Person {
		return new Employee(name, 1);
	}
}

let p: Person = new Employee('hfpp2012', 1111);
let p1: Person = p.find("rails365");
console.log(p1);