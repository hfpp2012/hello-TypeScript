// 模板
class Person {
	// 定义了两个数据内容
	protected firstName: string;
	protected lastName: string;

	constructor() {
		this.firstName = "rails365";
		this.lastName = "hfpp2012";
	}

	public greet() {
		console.log('hi');
	}

	protected sayHi() {
		console.log('private say hi');
	}

	public callSayHi() {
		this.sayHi();
		console.log('********');
	}

	// public
	// get 方法
	private getFirstName() {
		return this.firstName;
	}

	getLastName() {
		return this.lastName;
	}

	// public
	// set 方法
	setFirstName(firstName) {
		this.firstName = firstName;
	}

	setLastName(lastName) {
		this.lastName = lastName;
	}

	public othergreet() {
		this.greet();
		console.log('*****');
	}
}

// let aPerson = new Person();
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
class Programmer extends Person {
	public greet() {
		console.log('hello world');
	}

	// super 代表父类
	public greetLikeNormalPeople() {
		super.greet();
	}

	// 子类定义的方法
	// public getFullName(): string {
	// 	return `${this.firstName} ${this.lastName}`;
	// }

	// 自己定义的方法
	// getFirstName protected
	getSuperFirstName(): string {
		return this.getFirstName();
	}

	getSuperLastName(): string {
		return this.lastName;
	}

	// 可以访问继承过来的 private 属性
	// getFirstName 和 getLastName 是继承过来
	// public getFullName(): string {
	// 	return `${this.getFirstName()} ${this.getLastName()}`;
	// }

	public getFullName(): string {
		return `${this.getSuperFirstName()} ${this.getSuperLastName()}`;
	}
}

let aProgrammer = new Programmer();
// console.log(aProgrammer.firstName);
// 继承过来的方法
// aProgrammer.getFirstName();
// console.log(aProgrammer.getFullName());
// console.log(aProgrammer.getFirstName());

console.log(aProgrammer.getSuperFirstName());