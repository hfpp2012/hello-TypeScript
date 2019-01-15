// type Name = [string, number];

// 定义类型别名 type alias
// 以后就可以用 Name 来代替 string 类型
type Name = string;

// let my_name: Name = ["rails365", 23];

// let my_name:string = 'rails365';

// 不能重复定义
type User = {
	name: string;
	age: number;
	print(): void;
}

// const user: User = {
// 	name: "rails365",
// 	age: 27
// }

const user: User = {
	name: "rails365",
	age: 27,
	print: () => {
		console.log('xxx');
	}
}

interface IUser {
	name: string;
	age: number;
}

interface IUser {
	email: string
}

const other_user: IUser = {
	name: "rails365",
	age: 27,
	email: "hfpp2012@gmail.com"
}