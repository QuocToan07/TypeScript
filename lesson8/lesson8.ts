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

var length = arr3.length;

while (length >= 0) {
  // console.log(arr[length]);
  length--;
}
var arrConcat: string[] = ["Thu", "Hàn"];
arr2.concat(arrConcat);
console.log(arr2);
