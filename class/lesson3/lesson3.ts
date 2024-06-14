//GETTER / SETTER

class Person {
  private _age: number;
  public name: string;

  constructor(_age: number, name: string) {
    this._age = _age;
    this.name = name;
  }

  get age() {
    return this._age;
  }

  set age(currentAge) {
    if (currentAge < 0 || currentAge > 150) {
      throw Error("Invalid age");
    }
    this._age = currentAge;
  }
}

var person1 = new Person(23, "Toan");

console.log(person1.age);

console.log(">>>getter:", person1);

person1.age = 40;

console.log("setter:", person1);
