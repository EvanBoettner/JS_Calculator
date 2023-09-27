let calcWindow = document.getElementById("window");
let numbers = document.querySelector(".numbers");
let firstGroup = document.getElementById("operators1");
let secondGroup = document.getElementById("operators2");
let numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "CE"];
let firstArray = ["(", "*", "+"];
let secondArray = [")", "/", "-"];
let equal = document.querySelector(".equal");

firstGroup.innerHTML = firstArray
  .map(
    (operator, index) =>
      `<div class="operator" id="${index}op1">${operator}</div>`
  )
  .join("");

secondGroup.innerHTML = secondArray
  .map(
    (operator, index) =>
      `<div class="operator" id="${index}op2">${operator}</div>`
  )
  .join("");

numbers.innerHTML = numberArray
  .map((number, index) => `<div class="number" id=${index}>${number}</div>`)
  .join("");

for (let i = 0; i < numberArray.length; i++) {
  document.getElementById(i).addEventListener("click", () => {
    if (document.getElementById(i).textContent !== "CE") {
      calcWindow.innerHTML += `<span>${
        document.getElementById(i).textContent
      }</span>`;
    } else {
      calcWindow.textContent = "";
    }
  });
}

for (let i = 0; i < firstArray.length; i++) {
  document.getElementById(`${i}op1`).addEventListener("click", () => {
    calcWindow.innerHTML += `<span>${
      document.getElementById(`${i}op1`).textContent
    }</span>`;
  });
  document.getElementById(`${i}op2`).addEventListener("click", () => {
    calcWindow.innerHTML += `<span>${
      document.getElementById(`${i}op2`).textContent
    }</span>`;
  });
}

const calculate = (math) => {
  return new Function("return " + math)();
};

equal.addEventListener("click", () => {
  let math = calcWindow.textContent;
  let value = calculate(math);
  calcWindow.textContent = value;
});
