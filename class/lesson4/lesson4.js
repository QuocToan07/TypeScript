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
//Inheritance
var Animal = /** @class */ (function () {
    function Animal(name, foot) {
        this.name = name;
        this.foot = foot;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getFoot = function () {
        return this.foot;
    };
    return Animal;
}());
var Animal2 = /** @class */ (function (_super) {
    __extends(Animal2, _super);
    function Animal2(name, foot, codeQr) {
        var _this = _super.call(this, name, foot) || this;
        _this.codeQr = codeQr;
        return _this;
    }
    // Overitting
    Animal2.prototype.getFoot = function () {
        return "".concat(_super.prototype.getFoot.call(this), " ch\u00E2n");
    };
    return Animal2;
}(Animal));
var dog = new Animal("Pudding", "4");
var dog2 = new Animal2("Angle", "2", "344efwe");
console.log(">>>dog1", dog.getFoot());
console.log(">>>dog2", dog2.getFoot());
