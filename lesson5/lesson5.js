//STRING
var name4 = "Quốc Toản";

//Properties
console.log(name4.length);

//Method
console.log(name4.charAt(1)); 
// return specific charater by index

console.log(name4.charCodeAt(name4.length - 1)); 
// return binary number specific character by index

console.log(name4.concat(" Tây Ninh")); 
// nối string 
// return string 

console.log(name4.endsWith("n"));
// return bool 
// có phân biệt sensetive

console.log(name4.includes("T"));
// return bool 
// có phân biệt sensetive


var lorem = "lorem ipsum dolor sit amet"
console.log(`>>>lorem length: ${lorem.length}`) // return 26

//TH kh truyền param
console.log(lorem.indexOf()); // return -1

//TH param: string, number
console.log(lorem.indexOf("l")); // return 0 | first matching
console.log(lorem.indexOf("l", 2)); // return 14 | start index 2
console.log(lorem.indexOf("l", 27)); // return -1 | position > length
console.log(lorem.indexOf(".")); // return -1

//TH param empty string
console.log(lorem.indexOf("")); // return 0
console.log(lorem.indexOf("", 0)); // return 0
console.log(lorem.indexOf("", 27)); // return 26 | position > length






