function getArray(items: any[]): any[] {
	return new Array().concat(items);
}

let myNumArray = getArray([100, 200, 300]);
let myStrArray = getArray(["hello", "world"]);

console.log(myNumArray);
console.log(myStrArray);

myNumArray.push(400);
myStrArray.push("rails365");

console.log(myNumArray);
console.log(myStrArray);

myNumArray.push("hfpp2012");
myStrArray.push(500);

console.log(myNumArray);
console.log(myStrArray);

// [ 100, 200, 300, 400, 'hfpp2012' ]
// [ 'hello', 'world', 'rails365', 500 ]

// 限制为所有的元素是纯数字或字符串

// 
// function getArray(items: number[]): number[] {
// 	return new Array().concat(items);
// }

// function getArray(items: string[]): string[] {
// 	return new Array().concat(items);
// }

// function getArray(items: boolean[]): boolean[] {
// 	return new Array().concat(items);
// }