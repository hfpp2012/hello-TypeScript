interface Person {
	// 只读，不可修改
	readonly first_name: string
	last_name?: string

	print?(): void

	// 后面会讲
	[propName: string]: any;
}

let person: Person = {
	first_name: "hfpp2012",
	age: 27
}

person.first_name = "tony";

class Programmer implements Person {
	first_name: string;
}

const programmer: Person = new Programmer();
programmer.first_name = "tony";

// const sayName = (o: Person) => {
// 	console.log(o.first_name);
// }

// sayName(programmer);

// sayName(person);

// 类型断言
// sayName({ first_name: "hfpp2012", last_name: "rails365", age: 27 } as Person)

//
// sayName({ first_name: "hfpp2012", lassst_name: "rails365", age: 27 })