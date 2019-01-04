// 模板
class Person {
	// 定义了两个数据内容
	private firstName: string;
	private lastName: string;

	public greet() {
		console.log('hi');
	}

	private sayHi() {
		console.log('private say hi');
	}

	public callSayHi() {
		this.sayHi();
		console.log('********');
	}

	// public
	// get 方法
	getFirstName() {
		console.log(this.firstName);
	}

	// public
	// set 方法
	setFirstName(firstName) {
		this.firstName = firstName;
	}

	public othergreet() {
		this.greet();
		console.log('*****');
	}
}

let aPerson = new Person();
// 相当于 set 方法
// aPerson.firstName = "rails365"
// 相当于 get 方法
// console.log(aPerson.firstName);
aPerson.setFirstName("hfpp2012");
aPerson.getFirstName();

// aPerson.sayHi();
aPerson.callSayHi();

// 继承成了父类的数据和行为，就是属性和方法
// 它的父类就是 Person
// class Programmer extends Person {
// 	public greet() {
// 		console.log('hello world');
// 	}

// 	// super 代表父类
// 	public greetLikeNormalPeople() {
// 		super.greet();
// 	}
// }

// let aProgrammer: Person = new Programmer();
// let aProgrammer: Programmer = new Person();
// 调用方法时，先找自己本身对象的方法，如果没有，会找父类的
// aProgrammer.greet();

// aProgrammer.greetLikeNormalPeople();

// aProgrammer.othergreet();
// aProgrammer.firstName = "rails365";
// console.log(aProgrammer.firstName);

// 生成一个对象
// let aPerson = new Person();

// 设置 firstName 的内容
// aPerson.firstName = "rails365";
// aPerson.othergreet();
// 读取 firstName 的内容
// console.log(aPerson.firstName);