function isNumber(value) {
    // 可以进行进一步处理
    return typeof value === "number";
}
function isString(value) {
    return typeof value === "string";
}
// const log = (value: any) => {
// 	console.log(typeof value);
// 	if (isNumber(value)) {
// 		return `your number is ${value}`;
// 	}
// 	if (isString(value)) {
// 		return `your name is ${value}`;
// 	}
// 	throw new Error(`Expected string or number, got ${value}.`);
// }
var log = function (value) {
    console.log(typeof value);
    if (isNumber(value)) {
        return "your number is " + value;
    }
    if (isString(value)) {
        return "your name is " + value;
    }
    // throw new Error(`Expected string or number, got ${value}.`);
};
console.log(log(null));
