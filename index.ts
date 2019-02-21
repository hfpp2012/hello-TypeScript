// 函数名相同，参数不同
// 没有实现的定义
function sum(x: number, y: number): number;
function sum(x: number, y: number, z: number): number

// 上面两种定义的组合实现
function sum(x: number, y: number, z?: number): number {
	if (typeof z === 'undefined') {
		return x + y;
	} else {
		return x + y + z;
	}
}

// let n = sum(1, 2, 3);
// console.log(n);

// n = sum(1, 2);
// console.log(n);

function divide(x: number, y: number): number;
function divide(str: string, y: number): string[];

function divide(x: any, y: number): any {
	if (typeof x === 'number') {
		return x / y;
	} else if (typeof x === 'string') {
		return [x.substring(0, y), x.substring(y)]
	}
}

let n: number = divide(6, 2);
console.log(n);

let s: string[] = divide("football", 3);
console.log(s);

// 静态方法和实例方法
class Util {
	static divide(x: number, y: number): number;
	static divide(str: string, y: number): string[];

	static divide(x: any, y: number): any {
		if (typeof x === 'number') {
			return x / y;
		} else if (typeof x === 'string') {
			return [x.substring(0, y), x.substring(y)]
		}
	}
}

// let a: Util = new Util();
// console.log(a.divide(6, 2));
// console.log(a.divide('hello world', 4));

let c: number = Util.divide(6, 2);
console.log(c);