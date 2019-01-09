// 枚举类型
// 它的值是数字序号，从 0 开始
// 代码可读性强
// 可能会常用于下拉框等应用
enum DaysOfTheWeek {
	SUN = 100, MON, TUE, WED, THU, FRI, SAT
}

let day: DaysOfTheWeek;

day = DaysOfTheWeek.MON;

if (day === DaysOfTheWeek.MON) {
	console.log("Got to go to work");
}

console.log(day);