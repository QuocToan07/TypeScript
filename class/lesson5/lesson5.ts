// Static Methods and Properties
class Square {
  public test: boolean = false;
  static edge: number = 3;
  static calator(number): number {
    return this.edge * number;
  }
}

//console.log(Square.test);
console.log(Square.edge);
console.log(Square.calator(10));
