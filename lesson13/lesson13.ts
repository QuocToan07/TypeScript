// NEVER
function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}
//handleException2("just a test error");

//Phân biệt void vs never khi gán cho 1 biến
function testVoid(): void {
  //while (true) {
  //console.log("running...");
  //}
}

var a = testVoid();
//console.log(">>>check a:", a); // undefined

function testNever(): never {
  console.log("inside");
  while (true) {
    //console.log("running...");
  }
  console.log("bottom");
}

var b = testNever();
console.log(">>>check b:", b); // nothing return | chưa hiểu
