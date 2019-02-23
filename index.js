//  tsc index.ts 非空检查
//  tsc index.ts --strictNullChecks 严格的空检查
function splitInHalf(str) {
    var checkString = function () {
        if (str === null || str === undefined) {
            str = "test";
        }
    };
    checkString();
    // 告诉编译器 str 不能为空
    return str.substring(0, str.length / 2);
}
var s = splitInHalf("hello");
console.log(s);
