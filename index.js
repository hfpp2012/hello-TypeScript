function sayHi() {
    console.log('Hi');
}
var a = sayHi();
console.log(a);
function loopForever() {
    // 无限循环
    while (true) {
    }
}
function terminateWithError($msg) {
    throw new Error($msg);
}
function checkExhaustiveness(x) {
    throw new Error("类型出错: " + x);
}
function showTrueFalse(x) {
    if (typeof x === 'string') {
        console.log("string: " + x);
    }
    else if (typeof x === 'boolean') {
        console.log("boolean " + x);
    }
    else {
        // 传入别的类型，不是 string 或 boolean，编译器会处理
        // x 可能是一个不可到达的类型，可以分配给 never
        // 当传入错误的类型的时候，可以分配 给 never 类型
        checkExhaustiveness(x);
    }
}
var something = null;
var nothing = 12;
showTrueFalse(true);
showTrueFalse("false");
