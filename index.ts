// 函数
// 只要传过来的参数 o 有 name 属性
// o 可以是一个接口类型，这个接口类型要有 name 属性
const sayName = (o) => {
	console.log(o.name);
}

// 对象
const person = {
	age: 27,
	name: 'hfpp2012'
}

const bottle = {
	litres: 1,
	name: "漂流瓶"
}

class Person {
	name: string
}

let aPerson = new Person();
aPerson.name = "rails365";

sayName(aPerson);

sayName(person);

sayName(bottle);