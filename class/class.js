var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayName = function () {
        console.log('haha');
    };
    return Person;
}());
var p1 = new Person();
p1.firstName = 'wu';
console.log(p1.firstName);
// 继承
var Wy = /** @class */ (function (_super) {
    __extends(Wy, _super);
    function Wy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wy.prototype.sayName = function () {
        console.log('haha2');
    };
    return Wy;
}(Person));
var w = new Wy;
w.sayName();