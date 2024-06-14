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
//console.log("check sum4:", sum4(1, 3, true));

// Rest param
function Caculator(...numbers: number[]): number {
  var total = 0;
  numbers.forEach(function (x) {
    total += x;
  });
  return total;
}
//console.log(Caculator(20, 40));

function Caculator2(n: number, ...m: number[]) {
  let a3 = m.map(function (x) {
    return n * x;
  });
  return a3;
}
//console.log(Caculator2(20, 1, 2, 3, 4));

//Overloading function
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any): any {
  return a + b;
}
console.log(addNew(2, 1));
console.log(addNew("Hello", "Toản"));
