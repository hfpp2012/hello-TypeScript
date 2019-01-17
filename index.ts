interface Person {
	first_name: string
	last_name?: string

	print?(): void

	// 后面会讲
	[propName: string]: any;
}

let person = {
	first_name: "hfpp2012",
	age: 27
}

class Programmer implements Person {
	first_name: string;
}

const programmer = new Programmer();
programmer.first_name = "tony";

const sayName = (o: Person) => {
	console.log(o.first_name);
}

sayName(programmer);

// sayName(person);

// 类型断言
sayName({ first_name: "hfpp2012", last_name: "rails365", age: 27 } as Person)

//
sayName({ first_name: "hfpp2012", lassst_name: "rails365", age: 27 })