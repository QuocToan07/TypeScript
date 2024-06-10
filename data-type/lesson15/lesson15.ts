//Aliases

type aliases = number | string;

function addNumOrStr3(a: aliases, b: aliases) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Param must str or num");
}

console.log(addNumOrStr3("Toan", "Tran"));
