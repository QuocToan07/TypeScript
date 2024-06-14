//Access modifer
class Employess {
  private empCode: string;
  public empName: string;
  protected empBank: number;
  readonly isSingle: boolean;

  constructor(
    empCode: string,
    empName: string,
    empBank: number,
    isSingle: boolean
  ) {
    this.empBank = empBank;
    this.empCode = empCode;
    this.empName = empName;
    this.isSingle = isSingle;
  }
}

const TOAN = new Employess("Toản", "3424fdsfswe", 234254435, true);
console.log(TOAN);
