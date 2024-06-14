var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abstract Classes
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var Employee50 = /** @class */ (function (_super) {
    __extends(Employee50, _super);
    function Employee50(name, age, salary, hour) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.salary = salary;
        _this.hour = hour;
        return _this;
    }
    Employee50.prototype.getSalary = function () {
        return this.salary * this.hour;
    };
    return Employee50;
}(Employee));
var fammer = new Employee50("Toản", 24, 1000, 2);
console.log(fammer.getName(), fammer.getSalary());
