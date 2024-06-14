// Interface
interface IAnimal {
  qrCode: string;
  name?: string;
  life: string;
}

function GetQrCode(animal: IAnimal) {
  return animal.qrCode;
}

var animal = {
  qrCode: "eerwerwarqr4324wqwq",
  name: "Beer",
  life: "TB",
};

console.log(GetQrCode(animal));
