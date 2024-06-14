//GETTER / SETTER
var Person = /** @class */ (function () {
    function Person(_age, name) {
        this._age = _age;
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (currentAge) {
            if (currentAge < 0 || currentAge > 150) {
                throw Error("Invalid age");
            }
            this._age = currentAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person1 = new Person(23, "Toan");
console.log(person1.age);
console.log(">>>getter:", person1);
person1.age = 40;
console.log("setter:", person1);
