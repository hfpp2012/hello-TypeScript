// function getArray(items: any[]): any[] {
// 	return new Array().concat(items);
// }
// let myNumArray = getArray([100, 200, 300]);
// let myStrArray = getArray(["hello", "world"]);
// console.log(myNumArray);
// console.log(myStrArray);
// myNumArray.push(400);
// myStrArray.push("rails365");
// console.log(myNumArray);
// console.log(myStrArray);
// myNumArray.push("hfpp2012");
// myStrArray.push(500);
// console.log(myNumArray);
// console.log(myStrArray);
// [ 100, 200, 300, 400, 'hfpp2012' ]
// [ 'hello', 'world', 'rails365', 500 ]
// 可以用很多类型来代替 T
// T[] 代表数组，每个元素都是 T 类型
function getArray(items) {
    return new Array().concat(items);
}
// function getArray(items: number[]): number[] {
// 	return new Array().concat(items);
// }
// 调用，可以传入很多类型，代码复用
var myNumArray = getArray([100, 200, 300]);
var myStrArray = getArray(['hello', 'world']);
// 当不传入 T 时，会推荐出类型
// 不推荐这种写法，规范的作法是要指定类型
var myBooleanArray = getArray([true, false]);
myNumArray.push(400);
myStrArray.push('rails365');
// myBooleanArray.push('hfpp2012');
// function getArray1<T>(items: T): T {
// 	console.log(items.length);
// 	return T;
// }
function getArray1(items) {
    console.log(items.length);
    return items;
}
// myNumArray.push('hfpp2012');
// myStrArray.push(500);
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
