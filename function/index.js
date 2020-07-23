var myarr = ['12', 3, 4];
var mya = [2, 3];
// 元组tuple
// 跟数组差不多，但是里面的元素可以是多个类型的
var myarr4 = [1, 'num'];
// 函数
function fn(a, b) {
    return a + b;
}
fn(1, 2);
// arrow function 默认参数和可选参数
// const f1 = (a: string = '123', b?: number): any => a + b;
// let sum = f1('1');
// // console.log(sum);
// const f2 = (a: number, ...rest: Array<number>) =>
//   rest.reduce((total, next) => total + next, a);
// let summ = f2(1, 2, 3, 4, 5);
// console.log(summ);
function isString(val) {
    return typeof val === 'string' || typeof val === 'number';
}
function log(val) {
    if (isString(val)) {
        return "you val is " + val;
    }
    if (isString(val)) {
        return "you val is " + val;
    }
    throw Error("need type is string, got " + typeof val);
}
console.log(log([123]));
