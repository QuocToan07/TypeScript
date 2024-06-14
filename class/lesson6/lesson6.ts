//Abstract Classes
abstract class Employee {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  abstract getSalary(): number;

  getName(): string {
    return this.name;
  }
}

class Employee50 extends Employee {
  constructor(
    public name: string,
    public age: number,
    private salary: number,
    public hour: number
  ) {
    super(name, age);
  }
  getSalary() {
    return this.salary * this.hour;
  }
}

var fammer = new Employee50("Toản", 24, 1000, 2);
console.log(fammer.getName(), fammer.getSalary());
