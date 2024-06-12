//FUNCTION
function sum(a: number, b: number): number {
  return a + b;
}

//Arrow function
var sum2 = (a: number, b: number): number => {
  return a + b;
};

//console.log(sum2(10, 1));

//Optional parameter
function sum3(x: number, y: number, z?: number): number {
  if (z) {
    return x + y + z;
  }
  return x + y;
}
//console.log(sum3(2, 4, 5));
//console.log(sum3(2, 4));

//Default parameter
function sum4(x: number, y: number, z: boolean = false) {
  if (z === false) return x + y;
  else if (z) return y - x;
}
console.log("check sum4:", sum4(1, 3, true));
