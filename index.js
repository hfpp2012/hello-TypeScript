var p = { first: "rails365", second: 45 };
console.log(p);
var c = {
    id: Math.random().toString(36),
    run: function () {
        return 99;
    }
};
console.log(c.id);
console.log(c.run());
function checkElementAt(elements, toBeChecked, atIndex) {
    return elements[atIndex] === toBeChecked;
}
// 函数
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 2);
console.log(b);
var g = checker(items, 5, 1);
console.log(g);
