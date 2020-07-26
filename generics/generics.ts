function f1() {
  // 泛型，可重复利用
  let getArray = <T, V>(item: T[], s: V): T[] =>
    new Array().concat(item).concat([s]);
  let numberArr = getArray<number, string>([1, 2], '4');
  numberArr.push(3);
  console.log(numberArr);
}

// f1();

function f2() {
  class List<T> {
    private data: T[];

    constructor(elements: T[]) {
      this.data = elements;
    }

    add(t: T) {
      this.data.push(t);
    }

    remove(t: T) {
      let index = this.data.indexOf(t);
      if (index > -1) {
        this.data.splice(index, 1);
      }
    }

    asArray(): T[] {
      return this.data;
    }
  }

  let numbers = new List<number>([1, 2, 3]);
  numbers.add(4);
  numbers.remove(2);
  let arr = numbers.asArray();
  console.log(arr);

  let fruits = new List<string>(['apple', 'banana', 'pear']);
  fruits.add('orange');
  fruits.remove('banana');
  let fruitsArr = fruits.asArray();
  console.log(fruitsArr);
}

// f2();

function f3() {
  class Pair<T, S> {
    protected _first: T;
    protected _second: S;

    constructor(_first: T, _second: S) {
      this._first = _first;
      this._second = _second;
    }

    first = (): T => this._first;
    second = (): S => this._second;
  }

  let pair = new Pair<string, number>('wu', 2);
  let a = pair.first();
  let b = pair.second();
  console.log(a);
  console.log(b);
}

// f3();

function f4() {
  interface ElementChecker {
    // 匿名函数
    <T>(items: T[], toBechecked: T, atIndex: number): boolean;
  }

  function checkElementAt<T>(
    elememnts: T[],
    toBechecked: T,
    atIndex: number
  ): boolean {
    return elememnts[atIndex] === toBechecked;
  }
  let checker: ElementChecker = checkElementAt;
  let item = [1, 2, 3];
  let b: boolean = checker<number>(item, 2, 1);
  console.log(b);
}

// f4();

function f5() {
  class Pair<T, S> {
    _first: T;
    _second: S;

    constructor(_first: T, _second: S) {
      this._first = _first;
      this._second = _second;
    }

    // first = (): T => this._first;
    // second = (): S => this._second;
  }

  interface State<R, N> {
    [state: string]: Pair<R, N>;
  }
  let s: State<string, number> = {
    aa: { _first: 'w', _second: 7 },
    bb: { _first: 'w', _second: 8 },
  };
  console.log(s);
}
// f5();

function f6() {
  interface Collection<T> {
    add(t: T): void;
    remove(t: T): void;
    asArray(): T[];
  }

  interface Collection2<T> extends Collection<T> {
    getele(index: T): T;
  }

  class List<T> implements Collection<T> {
    data: T[] = [];
    constructor(arr: T[]) {
      this.data = arr;
    }

    add(t: T): void {
      this.data.push(t);
    }

    remove(t: T) {
      let index = this.data.indexOf(t);
      if (index > -1) {
        this.data.splice(index, 1);
      }
    }

    asArray(): T[] {
      return this.data;
    }
  }
  let list: Collection<number> = new List<number>([1, 2, 3]);
  list.add(4);
  list.remove(2);
  // console.log(list);

  class Book<T> extends List<T> {}

  let book: Book<boolean> = new Book<boolean>([true, false]);
  book.add(true);
  book.add(false);
  book.remove(false);
  // console.log(book);

  class Moive<T> implements Collection2<T> {
    data: T[] = [];
    constructor(arr: T[]) {
      this.data = arr;
    }

    add(t: T): void {
      this.data.push(t);
    }

    remove(t: T) {
      let index = this.data.indexOf(t);
      if (index > -1) {
        this.data.splice(index, 1);
      }
    }

    asArray(): T[] {
      return this.data;
    }

    getele(i: T): T {
      return i;
    }
  }

  let moiveList = new Moive<number>([1, 2]);
  let c = moiveList.getele(2);
  console.log(moiveList, c);
  class Lei {}
  class TT implements Lei {} // 类可以实现类
}

// f6();

function f7() {
  class A {
    x: string = 'wu';
  }

  const c = {
    x: 6,
    y: 'yyy',
  };

  class B {
    y: keyof A;
  }

  let b = new B();
  b.y = 'x';
  console.log(b);
}
// f7();

function f8() {
  interface Shape {
    draw(): void;
  }

  function drawShapes<S extends Shape>(shapes: S[]): void {
    shapes.forEach((shape) => shape.draw());
  }

  class Circle implements Shape {
    draw(): void {
      console.log('drawing Circle');
    }
  }

  class Rectagle implements Shape {
    draw(): void {
      console.log('drawing Rectagle');
    }
  }

  let circle = new Circle();
  let rectagle = new Rectagle();

  drawShapes([circle, rectagle]);
}
// f8();

function f9(){

}

f9()
