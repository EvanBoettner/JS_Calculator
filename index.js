let calcWindow = document.getElementById("window"); //Calculator Window
let numbers = document.querySelector(".numbers"); //Number buttons
let firstGroup = document.getElementById("operators1"); //Container for first group of operators
let secondGroup = document.getElementById("operators2"); //Container for second group of operators
let numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "CE"]; //Calculator buttons to map
let firstArray = ["(", "*", "+"]; //Operators to map
let secondArray = [")", "/", "-"]; //Operators to map
let equal = document.querySelector(".equal"); //Equal button

//This maps the first set of operators to clickable divs
firstGroup.innerHTML = firstArray
  .map(
    (operator, index) =>
      `<div class="operator" id="${index}op1">${operator}</div>`
  )
  .join("");

//This maps the second set of operators to clickable divs
secondGroup.innerHTML = secondArray
  .map(
    (operator, index) =>
      `<div class="operator" id="${index}op2">${operator}</div>`
  )
  .join("");

//This maps the numbers to clickable divs
numbers.innerHTML = numberArray
  .map((number, index) => `<div class="number" id=${index}>${number}</div>`)
  .join("");

//Attaches event listener to mapped div
for (let i = 0; i < numberArray.length; i++) {
  document.getElementById(i).addEventListener("click", () => {
    //If clicked and value is not CE display selected number
    if (document.getElementById(i).textContent !== "CE") {
      calcWindow.innerHTML += `<span>${
        document.getElementById(i).textContent
      }</span>`;
    } else {
      //If CE selected clear everything
      calcWindow.textContent = "";
    }
  });
}

//Attach listners to mapped divs
for (let i = 0; i < firstArray.length; i++) {
  //displays selected operator
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

//Takes in a stringified expression and returns the result
const calculate = (math) => {
  return new Function("return " + math)();
};

//Listens for "=" to be clicked. When clicked display result of expression
equal.addEventListener("click", () => {
  let math = calcWindow.textContent;
  let value = calculate(math);
  calcWindow.textContent = value;
});

//Allows the user to perform calculations with the keyboard or numberpad
window.addEventListener("keydown", (e) => {
  if (
    e.code.includes("Digit") ||
    (e.code.includes("Numpad") && !e.code.includes("Enter")) ||
    e.key === "+" ||
    e.code === "Minus" ||
    e.key === "*" ||
    e.key === "/"
  ) {//Displays the user input
    if (firstArray.indexOf(e.key) !== -1) {//Adds selected effect to button that matches key value
      document.getElementById(
        `${firstArray.indexOf(e.key)}op1`
      ).style.backgroundColor = "rgb(0, 153, 255)";
      setTimeout(() => {
        document.getElementById(
          `${firstArray.indexOf(e.key)}op1`
        ).style.backgroundColor = "rgb(186, 245, 175)";
      }, 200);
    }
    if (secondArray.indexOf(e.key) !== -1) {//Adds selected effect to button that matches key value
      document.getElementById(
        `${secondArray.indexOf(e.key)}op2`
      ).style.backgroundColor = "rgb(0, 153, 255)";
      setTimeout(() => {
        document.getElementById(
          `${secondArray.indexOf(e.key)}op2`
        ).style.backgroundColor = "rgb(186, 245, 175)";
      }, 200);
    }
    calcWindow.textContent += e.key;
  }
  if (e.key === "Enter" || e.key === "=") {
    //Displays result of equation
    let math = calcWindow.textContent;
    let value = calculate(math);
    calcWindow.textContent = value;
  }
  if (e.key === "Backspace") {
    //Deletes last user input
    let math = calcWindow.textContent;
    math = math.substring(0, math.length - 1);
    calcWindow.textContent = math;
  }
  if (e.key === "Delete") {
    //Clears all user input and adds active effect to "Clear Everything" button
    document.getElementById(numberArray.indexOf("CE")).style.backgroundColor =
      "rgb(0, 153, 255)";
    calcWindow.textContent = "";
    setTimeout(() => {
      document.getElementById(numberArray.indexOf("CE")).style.backgroundColor =
        "rgb(186, 245, 175)";
    }, 200);
  }
  if (numberArray.indexOf(Number(e.key)) !== -1) {
    //Adds a selected effect to the button of the same key value
    document.getElementById(
      numberArray.indexOf(Number(e.key))
    ).style.backgroundColor = "rgb(0, 153, 255)";
    setTimeout(() => {
      document.getElementById(
        numberArray.indexOf(Number(e.key))
      ).style.backgroundColor = "rgb(186, 245, 175)";
    }, 200);
  }
  if (numberArray.indexOf(e.key) !== -1) {
    //Adds a selected effect to the button of the same key value
    document.getElementById(numberArray.indexOf(e.key)).style.backgroundColor =
      "rgb(0, 153, 255)";
    setTimeout(() => {
      document.getElementById(
        numberArray.indexOf(e.key)
      ).style.backgroundColor = "rgb(186, 245, 175)";
    }, 200);
  }
});
