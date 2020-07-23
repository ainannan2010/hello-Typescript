function f1() {
  // 1.type 定义类型的别名
  type Name = string;
  let myname: Name = 'yy';
  // 等价于
  // let myname: string = 'yy'
  // 2. 定义对象的别名
  type User = {
    // 等号
    name: string; // 用的是分号
    age: number;
  };

  let u1: User = {
    name: 'yang',
    age: 12,
  };

  console.log(u1.name);

  // 区别于interface interface 可以定义多个名字相同的属性， type不行
  interface IUser {
    // 冇等号
    name: string;
    age: number;
  }

  let u2: IUser = {
    name: 'wu',
    age: 33,
  };

  console.log(u2.name);
}

// f1()

function f2() {
  // 支付统一模版
  interface Pay {
    post(): void;
  }

  // 处理支付接口封装
  const do_pay = (pay: Pay) => {
    pay.post();
  };

  // 微信支付
  class Wepay implements Pay {
    // 微信接口
    post(): void {
      console.log('wechat pay');
    }
  }

  // 支付宝支付
  class Alipay implements Pay {
    // 支付宝接口
    post(): void {
      console.log('ali pay');
    }
  }

  // 其他支付平台

  let we_pay: Pay = new Wepay();
  let ali_pay: Pay = new Alipay();

  do_pay(we_pay);
  do_pay(ali_pay);
}

// f2();

function f3() {
  interface Per {
    name: string;
    age?: number; // 可选参数
    // [propname: string]: any
  }

  let person = {
    name: 'yyy',
    email: '233',
  };

  const sayName = (obj: Per) => {
    console.log(obj.name);
  };
  sayName(person); // 冇报错
  // sayName({name: 'wu', email: '22'}); // 直接放在参数中就报错
  // sayName({name: 'wu', email: '22'} as Per); // 用了as就不报错了
}

// f3();

function f4() {
  interface Per {
    readonly name: string;
    arr: Array<number>;
  }
  let person: Per = {
    name: 'yyy',
    arr: [1, 2],
  };
  // person.name = 'yyy2' // 报错， name是只读属性
  // let arrs: Array<number> = [1, 3, 4, '5']; // 报错， ‘5’不是数字类型
}

// f4();

function f5() {
  // 守卫

  // 1. typeof
  function show(x: number | string): void {
    if (typeof x === 'number') {
      console.log('x is number');
    } else {
      console.log('x is string');
    }
  }

  // show(3);
  // show('y')

  // 属性
  class Bike {
    start() {
      console.log('bike start');
    }

    ride() {
      console.log('this is bike drive');
    }
  }

  class Car {
    start() {
      console.log('car start');
    }

    drive() {
      console.log('this is car drive');
    }
  }
  // props is Car发生在编译时期
  // boolean发生在运行时期
  function isCar(props: Car | Bike): props is Car {
    return (props as Car).drive !== undefined;
  }

  function move(vehicle: Bike | Car) {
    vehicle.start();
    if (isCar(vehicle)) {
      vehicle.drive();
    } else {
      (vehicle as Bike).ride();
    }
  }
  // move(new Car());

  // 原形链继承
  function move1(vehicle: Bike | Car) {
    vehicle.start();
    if (vehicle instanceof Car) {
      vehicle.drive();
    } else {
      (vehicle as Bike).ride();
    }
  }

  move1(new Car());
}

// f5();

function f6() {
  function check(s: never): never {
    throw new Error('error');
  }

  function show(p: string | boolean): void {
    if (typeof p === 'string') {
      console.log('this is string');
    } else {
      check(p);
    }
  }

  show([2, 2]);
}

f6();
