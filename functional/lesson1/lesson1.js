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
console.log("check sum4:", sum4(1, 3, true));
