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
