// SWITCH CASE
var myAge: number = 25;
/*
switch (myAge) {
  case 10: {
    console.log("Nhi đồng");
    break;
  }
  case 20: {
    console.log("Thanh thiếu niên");
    break;
  }
  default: {
    console.log("Già");
    break;
  }
}
*/

// Cách viết gộp
switch (myAge) {
  case 10: {
    console.log("Nhi đồng");
    break;
  }
  case 20:
  case 25: {
    console.log("Thanh thiếu niên");
    break;
  }
  default: {
    console.log("Già");
    break;
  }
}
