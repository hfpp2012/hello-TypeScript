// 上面两种定义的组合实现
function sum(x, y, z) {
    if (typeof z === 'undefined') {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
var n = sum(1, 2, 3);
console.log(n);
n = sum(1, 2);
console.log(n);
