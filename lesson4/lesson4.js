// NUMBER
// int, long, float, double -> number
// bigint: dùng với số lớn, bigdata
var test = 1;
// Method
console.log(test.toFixed()); //làm tròn số
// toFixed(<number>)
// số sau dấu chấm:
//      >5 - làm tròn lên
//      <5 = tròn xuống
var a = test.toPrecision().valueOf();
console.log(a.valueOf()); //trả về string đại diện cho number đó
