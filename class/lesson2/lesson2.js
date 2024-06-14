//Access modifer
var Employess = /** @class */ (function () {
    function Employess(empCode, empName, empBank) {
        this.empBank = empBank;
        this.empCode = empCode;
        this.empName = empName;
    }
    return Employess;
}());
var TOAN = new Employess("Toản", "3424fdsfswe", 234254435);
console.log(TOAN);
