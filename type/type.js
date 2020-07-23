function f1() {
    var myname = 'yy';
    var u1 = {
        name: 'yang',
        age: 12
    };
    console.log(u1.name);
    var u2 = {
        name: 'wu',
        age: 33
    };
    console.log(u2.name);
}
// f1()
function f2() {
    // 处理支付接口封装
    var do_pay = function (pay) {
        pay.post();
    };
    // 微信支付
    var Wepay = /** @class */ (function () {
        function Wepay() {
        }
        // 微信接口
        Wepay.prototype.post = function () {
            console.log('wechat pay');
        };
        return Wepay;
    }());
    // 支付宝支付
    var Alipay = /** @class */ (function () {
        function Alipay() {
        }
        // 支付宝接口
        Alipay.prototype.post = function () {
            console.log('ali pay');
        };
        return Alipay;
    }());
    // 其他支付平台
    var we_pay = new Wepay();
    var ali_pay = new Alipay();
    do_pay(we_pay);
    do_pay(ali_pay);
}
// f2();
function f3() {
    var person = {
        name: 'yyy',
        email: '233'
    };
    var sayName = function (obj) {
        console.log(obj.name);
    };
    sayName(person); // 冇报错
    // sayName({name: 'wu', email: '22'}); // 直接放在参数中就报错
    // sayName({name: 'wu', email: '22'} as Per); // 用了as就不报错了
}
// f3();
function f4() {
    var person = {
        name: 'yyy',
        arr: [1, 2]
    };
    // person.name = 'yyy2' // 报错， name是只读属性
    // let arrs: Array<number> = [1, 3, 4, '5']; // 报错， ‘5’不是数字类型
}
// f4();
function f5() {
    // 守卫
    // 1. typeof
    function show(x) {
        if (typeof x === 'number') {
            console.log('x is number');
        }
        else {
            console.log('x is string');
        }
    }
    // show(3);
    // show('y')
    // 属性
    var Bike = /** @class */ (function () {
        function Bike() {
        }
        Bike.prototype.start = function () {
            console.log('bike start');
        };
        Bike.prototype.ride = function () {
            console.log('this is bike drive');
        };
        return Bike;
    }());
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.start = function () {
            console.log('car start');
        };
        Car.prototype.drive = function () {
            console.log('this is car drive');
        };
        return Car;
    }());
    // props is Car发生在编译时期
    // boolean发生在运行时期
    function isCar(props) {
        return props.drive !== undefined;
    }
    function move(vehicle) {
        vehicle.start();
        if (isCar(vehicle)) {
            vehicle.drive();
        }
        else {
            vehicle.ride();
        }
    }
    // move(new Car());
    // 原形链继承
    function move1(vehicle) {
        vehicle.start();
        if (vehicle instanceof Car) {
            vehicle.drive();
        }
        else {
            vehicle.ride();
        }
    }
    move1(new Car());
}
// f5();
function f6() {
    function check(s) {
        throw new Error('error');
    }
    function show(p) {
        if (typeof p === 'string') {
            console.log('this is string');
        }
        else {
            check(p);
        }
    }
    show([2, 2]);
}
f6();
