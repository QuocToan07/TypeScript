//FUNCTION
function sum(a, b) {
    return a + b;
}
//Arrow function
var sum2 = function (a, b) {
    return a + b;
};
//console.log(sum2(10, 1));
//Optional parameter
function sum3(x, y, z) {
    if (z) {
        return x + y + z;
    }
    return x + y;
}
//console.log(sum3(2, 4, 5));
//console.log(sum3(2, 4));
//Default parameter
function sum4(x, y, z) {
    if (z === void 0) { z = false; }
    if (z === false)
        return x + y;
    else if (z)
        return y - x;
}
//console.log("check sum4:", sum4(1, 3, true));
// Rest param
function Caculator() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (x) {
        total += x;
    });
    return total;
}
//console.log(Caculator(20, 40));
function Caculator2(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    var a3 = m.map(function (x) {
        return n * x;
    });
    return a3;
}
function addNew(a, b) {
    return a + b;
}
console.log(addNew(2, 1));
console.log(addNew("Hello", "Toản"));
