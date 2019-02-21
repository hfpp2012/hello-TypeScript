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

let n = sum(1, 2, 3);
console.log(n);

n = sum(1, 2);
console.log(n);