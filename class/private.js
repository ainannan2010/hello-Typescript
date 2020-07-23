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
        this.firstName = 'yang';
        this.lastName = 'wu';
    }
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getFirstName = function () {
        console.log(this.firstName);
    };
    return Person;
}());
var p1 = new Person();
// p1.setFirstName('yyy');
// p1.getFirstName();
// p1.firstName
// p1.lastName
var Wy1 = /** @class */ (function (_super) {
    __extends(Wy1, _super);
    function Wy1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wy1.prototype.sayName = function () {
        return this.lastName;
    };
    return Wy1;
}(Person));
var w1 = new Wy1();
w1.sayName();
