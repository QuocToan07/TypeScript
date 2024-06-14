// Static Methods and Properties
var Square = /** @class */ (function () {
    function Square() {
        this.test = false;
    }
    Square.calator = function (number) {
        return this.edge * number;
    };
    Square.edge = 3;
    return Square;
}());
//console.log(Square.test);
console.log(Square.edge);
console.log(Square.calator(10));
