// 模板
class Person {
	// 定义了两个数据内容
	firstName: string;
	lastName: string;
}

// 生成一个对象
let aPerson = new Person();

// 设置 firstName 的内容
aPerson.firstName = "rails365";
// 读取 firstName 的内容
console.log(aPerson.firstName);

class Movie {
	name: string;
	play_count: number;
	created_at: string;
	time: string;

	// this 指向生成的 Object 本身
	constructor(name: string, play_count: number) {
		this.name = name;
		this.play_count = play_count;
	}

	// method 方法 可能会对数据进行操作
	display_play_count(padding: string = '*****') {
		return `${this.play_count} 次数 ${padding}`
	}

	// 对 object 的数据进行操作
	increase_play_count() {
		this.play_count += 1;
	}
}

// 生成一个 Object
let m = new Movie("诱人的 TypeScript 视频教程", 15);

// m.name = "诱人的 TypeScript 视频教程 #11 函数 - Rest Parameters"
console.log(m.name);
console.log(m.display_play_count('--------'));
m.increase_play_count();
console.log(m.display_play_count('--------'));
m.increase_play_count();
console.log(m.display_play_count('--------'));

let m1 = new Movie("诱人的 GraphQL 视频教程 #1 介绍", 1);

console.log(m1.name);
console.log(m1.display_play_count('--------'));
m1.increase_play_count();
console.log(m1.display_play_count('--------'));
m1.increase_play_count();
console.log(m1.display_play_count('--------'));