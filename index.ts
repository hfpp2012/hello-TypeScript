class Rectangle {
	private w: number;
	private h: number;

	constructor(w: number, h: number) {
		this.w = w;
		this.h = h;
	}

	getAreaFunction() {
		return (): number => {
			return this.w * this.h;
		}
	}
}

let rectangle: Rectangle = new Rectangle(2, 5);
// 返回 function
let areaFunction = rectangle.getAreaFunction();
// 得到面积
// this 是指向 rectangle 这个对象，还是调用的上下文
let area = areaFunction();
console.log(area);