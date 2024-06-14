//FOR
var listStudent = [];
var student;
student = {
    id: "3424sdfsf23",
    name: "Quốc Toản",
    age: 23
};
listStudent.push(student);
student = {
    id: "2323weqeq21",
    name: "Thái Công",
    age: 40
};
listStudent.push(student);
for (var i = 0; i < listStudent.length; i++) {
    var student123 = listStudent[i];
    console.log(">>>", student123);
}
