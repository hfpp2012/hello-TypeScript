// 接口
// 传过来的参数必须包含接口定义的属性和方法
interface Named {
	// 属性
	name: string

	// 方法
	// 没有方法体
	// 具体的对象中实现方法体
	print(name: string): void;
}

// 函数
// 只要传过来的参数 o 有 name 属性
// o 可以是一个接口类型，这个接口类型要有 name 属性
// 定义 o 为接口类型，可以传入一个对象
const sayName = (o: Named) => {
	// console.log(o.name);
	o.print(o.name);
}

// 对象
const person = {
	age: 27,
	name: "rails365",
	print: (name) => {
		console.log(name)
	}
}

sayName(person);

// const bottle = {
// 	litres: 1,
// 	name: "漂流瓶"
// }

class Person {
	name: string

	print(name: string): void {
		console.log(name);
	}
}

let aPerson = new Person();
aPerson.name = "rails365";

sayName(aPerson);



// sayName(bottle);