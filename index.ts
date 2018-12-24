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
}

let m = new Movie();

m.name = "诱人的 TypeScript 视频教程 #11 函数 - Rest Parameters"
console.log(m.name);