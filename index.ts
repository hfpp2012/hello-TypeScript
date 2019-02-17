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

class Person {
	private _name: string;
	private _age: number;

	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}

	// 读取
	getName(): string {
		return this._name;
	}

	// 设置
	setName(name: string): void {
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}
}

let p: Person = new Person("hfpp2012", 29);
// 输出 name
console.log(p.name);
// console.log(p.getName());

// 修改 name
p.name = 'rails365';
// p.setName("rails365");
console.log(p);