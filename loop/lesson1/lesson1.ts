//FOR

var listStudent: object[] = [];

var student: {
  id: string;
  name: string;
  age: number;
};

student = {
  id: "3424sdfsf23",
  name: "Quốc Toản",
  age: 23,
};

listStudent.push(student);

student = {
  id: "2323weqeq21",
  name: "Thái Công",
  age: 40,
};

listStudent.push(student);

for (let i = 0; i < listStudent.length; i++) {
  console.log(">>>", listStudent[i]);
}
