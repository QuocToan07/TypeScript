//Inheritance
class Animal {
  public name: string;
  public foot: string;

  constructor(name: string, foot: string) {
    this.name = name;
    this.foot = foot;
  }

  getName(): string {
    return this.name;
  }

  getFoot(): string {
    return this.foot;
  }
}

class Animal2 extends Animal {
  public name: string;
  public foot: string;
  public codeQr: string;

  constructor(name: string, foot: string, codeQr: string) {
    super(name, foot);
    this.codeQr = codeQr;
  }

  // Overitting
  getFoot(): string {
    return `${super.getFoot()} chân`;
  }
}

var dog = new Animal("Pudding", "4");

var dog2 = new Animal2("Angle", "2", "344efwe");

console.log(">>>dog1", dog.getFoot());
console.log(">>>dog2", dog2.getFoot());
