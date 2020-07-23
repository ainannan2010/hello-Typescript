// 函数
// interface 定义接口类型
interface Named {
  name: string;
  log(names: string): void
}

const sayName = (o: Named) => {
  console.log(o.name);
  o.log('2')
};

class Persons {
  name: string
  log(name) {
    console.log(name);
  }
}

const zoom = {
  hello: 27,
  name: 'yang123',
  log(name){
    console.log(name);
    
  }
}

let p11 = new Persons()
p11.name = 'yyy'
sayName(p11)
sayName(zoom)
