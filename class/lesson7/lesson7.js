function GetQrCode(animal) {
    return animal.qrCode;
}
var animal = {
    qrCode: "eerwerwarqr4324wqwq",
    name: "Beer",
    life: "TB"
};
console.log(GetQrCode(animal));
