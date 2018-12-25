// 模板
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 生成一个对象
var aPerson = new Person();
// 设置 firstName 的内容
aPerson.firstName = "rails365";
// 读取 firstName 的内容
console.log(aPerson.firstName);
var Movie = /** @class */ (function () {
    // this 指向生成的 Object 本身
    function Movie(name, play_count) {
        this.name = name;
        this.play_count = play_count;
    }
    // method 方法 可能会对数据进行操作
    Movie.prototype.display_play_count = function (padding) {
        if (padding === void 0) { padding = '*****'; }
        return this.play_count + " \u6B21\u6570 " + padding;
    };
    // 对 object 的数据进行操作
    Movie.prototype.increase_play_count = function () {
        this.play_count += 1;
    };
    return Movie;
}());
// 生成一个 Object
var m = new Movie("诱人的 TypeScript 视频教程", 15);
// m.name = "诱人的 TypeScript 视频教程 #11 函数 - Rest Parameters"
console.log(m.name);
console.log(m.display_play_count('--------'));
m.increase_play_count();
console.log(m.display_play_count('--------'));
m.increase_play_count();
console.log(m.display_play_count('--------'));
var m1 = new Movie("诱人的 GraphQL 视频教程 #1 介绍", 1);
console.log(m1.name);
console.log(m1.display_play_count('--------'));
m1.increase_play_count();
console.log(m1.display_play_count('--------'));
m1.increase_play_count();
console.log(m1.display_play_count('--------'));
