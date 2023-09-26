let calcWindow = document.getElementById("window");
let numbers = document.querySelector(".numbers");
let firstGroup = document.getElementById("operators1");
let secondGroup = document.getElementById("operators2");
let numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3];
let firstArray = ["(", "X", "+"];
let secondArray = [")", "/", "-"];
let equal = document.querySelector(".equal");
var firstNumber;
var secondNumber;
var operator;

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
    calcWindow.innerHTML += `<span>${
      document.getElementById(i).textContent
    }</span>`;
  });
}

for (let i = 0; i < firstArray.length; i++) {
  document.getElementById(`${i}op1`).addEventListener("click", () => {
    firstNumber = Number(calcWindow.textContent);
    calcWindow.innerHTML += `<span>${
      document.getElementById(`${i}op1`).textContent
    }</span>`;
    operator = document.getElementById(`${i}op1`).textContent;
  });
  document.getElementById(`${i}op2`).addEventListener("click", () => {
    firstNumber = Number(calcWindow.textContent);
    calcWindow.innerHTML += `<span>${
      document.getElementById(`${i}op2`).textContent
    }</span>`;
    operator = document.getElementById(`${i}op2`).textContent;
  });
}

equal.addEventListener("click", () => {
  let math = calcWindow.textContent;
  secondNumber = math.substring(Number(math.indexOf(operator)) + 1);
  if (operator === "/") {
    calcWindow.textContent = Number(firstNumber) / Number(secondNumber);
  }
  if (operator === "X") {
    calcWindow.textContent = Number(firstNumber) * Number(secondNumber);
  }
  if (operator === "+") {
    calcWindow.textContent = Number(firstNumber) + Number(secondNumber);
  }
  if (operator === "-") {
    calcWindow.textContent = Number(firstNumber) - Number(secondNumber);
  }
});
