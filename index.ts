// class Person {
// 	private _name: string;
// 	private _age: number;

// 	constructor(name: string, age: number) {
// 		this._name = name;
// 		this._age = age;
// 	}
// }

class Person {
	constructor(private _name: string, private _age: number) {
		
	}
}

let p: Person = new Person("hfpp2012", 29);
console.log(p);