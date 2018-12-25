// 模板
class Person {
	// 定义了两个数据内容
	firstName: string;
	lastName: string;

	greet() {
		console.log('hi');
	}

	othergreet() {
		this.greet();
		console.log('*****');
	}
}

// 继承成了父类的数据和行为，就是属性和方法
// 它的父类就是 Person
class Programmer extends Person {
	greet() {
		console.log('hello world');
	}

	// super 代表父类
	greetLikeNormalPeople() {
		super.greet();
	}
}

let aProgrammer: Person = new Programmer();
// let aProgrammer: Programmer = new Person();
// 调用方法时，先找自己本身对象的方法，如果没有，会找父类的
// aProgrammer.greet();

// aProgrammer.greetLikeNormalPeople();

aProgrammer.othergreet();

// 生成一个对象
// let aPerson = new Person();

// 设置 firstName 的内容
// aPerson.firstName = "rails365";
// aPerson.othergreet();
// 读取 firstName 的内容
// console.log(aPerson.firstName);