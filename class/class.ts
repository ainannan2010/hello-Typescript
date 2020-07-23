class Person {
  firstName: string;
  lastName: number;
    sayName() {
      console.log('haha');
      
    }
}

let p1 = new Person();
p1.firstName = 'wu';
console.log(p1.firstName);
// 继承
class Wy extends Person {
  sayName() {
    console.log('haha2');
  }
}

let w = new Wy
w.sayName()
