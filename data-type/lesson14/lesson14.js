//UNION - join
//Mong muốn: bắt lỗi khi complier code
function addNumOrStr(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Param must str or num");
}
//lỗi khi running
console.log(addNumOrStr("Quốc", "Toản"));
