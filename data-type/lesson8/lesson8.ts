//ARRAY

// Khai báo
// auto gán type
var arr = ["Toản", 2, true]; // khai báo + gán giá trị

// gán type = cơm | can gán giá ở đây
var arr2: string[] = []; // 1 value trong array
var arr3: (string | number)[] = []; // mix type

//Gán giá trị
arr2.push("Toản", "Thành");
arr3.push("Thanh", 39);

//Test
var testArr: number[] = [1, 2, 3];

var concatArr: number[] = [4, 5, 6];
var result = testArr.concat(concatArr);
//console.log(result); // return new arr
//console.log(testArr); // kh làm thay đổi arr gốc

var result2 = testArr.every(function (currentNum) {
  return currentNum < 10;
});
//console.log(result2); // return bool | check từng element in arr

var result3 = result.filter(function (ele) {
  return ele % 2 === 0;
});
console.log(result3);
