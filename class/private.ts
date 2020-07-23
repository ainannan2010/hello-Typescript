class Person {
  private firstName: string; // 只有类内部可以访问， 实例不行
  protected lastName: string; // 只有类内部和子类内部可以访问， 实例不行
  public fullName: string; // 类和子类和实例都可以访问

  constructor() {
    this.firstName = 'yang'
    this.lastName = 'wu'
  }
  public setFirstName(firstName) {
    this.firstName = firstName;
  }

  public getFirstName() {
    console.log(this.firstName);
  }
}

let p1 = new Person();
// p1.setFirstName('yyy');

// p1.getFirstName();
// p1.firstName
// p1.lastName

class Wy1 extends Person {
  sayName(): string {
    return this.lastName;
  }
}

let w1 = new Wy1()
w1.sayName()