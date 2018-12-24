var a;
a = 10;
a = "hfpp2012";
a = [1, 2, 3];
var log = function (value) {
    console.log(typeof value);
    if (typeof value === 'number') {
        return "your number is " + value;
    }
    if (typeof value === "string") {
        return "your name is " + value;
    }
    throw new Error("Expected string or number, got " + value + ".");
};
console.log(log(10));
var b;
b = [1, 2, "2012", [1, 2]];
