class Component {
	private width: number;
	private height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	display(): void {
		console.log(this.height);
	}
}

// 接口继承类
// 继承类的方法和属性，但可以不用实现方法
// 也可以定义自己的方法和属性
interface Widget extends Component {
	hide(): void;
}

class Button extends Component implements Widget {
	hide(): void {
		console.log('hiding');
	}
}

let w: Widget = new Button(1, 2);
console.log(w);
w.display();
w.hide();