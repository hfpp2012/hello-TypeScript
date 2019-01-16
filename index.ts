// 接口
// 支付接口
interface Person {
	name: string;

	greet(): void;
}

const sayName = (o: Person) => {
	o.greet();
}

// 实现接口，微信支付，支付宝支付

// 类实现接口
class Employee implements Person {
	name: string;

	greet(): void {
		console.log('I am employee');
	}
}

class Customer implements Person {
	public name: string;
	public email: string;

	greet(): void {
		console.log('I am customer');
	}
}

// let cu = new Customer();
// cu.greet();

// sayName(cu);

// let em = new Employee();
// em.greet();

// sayName(em);

let customer: Person = new Customer();
customer.greet();

let employee: Person = new Employee();
employee.greet();

// 支付接口

interface Pay {
	post(): void;
}

// 可能会发送 http 请求
// 真正支付的请求
const do_pay = (pay: Pay) => {
	// 有一些逻辑
	pay.post()
}

// 微信支付
class WePay implements Pay {
	// 调微信支付的接口
	post() {

	}
}

// 支付宝支付
class AliPay implements Pay {
	// 调支付宝支付的接口
	post() {

	}
}

// 其他的支付接口

let we_pay: Pay = new WePay();
let ali_pay: Pay = new AliPay();

// 微信支付
do_pay(we_pay);

// 支付宝支付
do_pay(ali_pay);