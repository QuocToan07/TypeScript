// IF conditon
let name123: string = "";

if (name123) {
  console.log("Watch movie");
} else {
  console.log("Can not watch movie");
}

// Khi đk của if kh ở dạng so sánh
//      convert to boolean(Booolear(age))
//      đọc quy luật Boolean js:
//          num > 0 -> true;
//          num = 0 -> false
//          string not empty -> true
//          string empty -> false

//If() ... Else If() ... Else
// Khi có nhìu hơn 2 đk
var products: number = 12;
var discout: number;

if (products > 0 && products <= 5) {
  discout = 5;
} else if (products < 5 && products > 10) {
  discout = 15;
} else {
  discout = 20;
}
console.log(discout);
