const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const resetButton = document.querySelector(".reset");
//const displayElement = document.querySelector('.display-1');
const calculator = {
  displayValue: "0",
  firstOperand: null,
  SecondOperand: null,
  operator: null,
};
let decimalPoint = false;

function myFunction(e) {
  if (e.target.innerText === "." && !decimalPoint) {
    decimalPoint = true;
  } else if (e.target.innerText === "." && decimalPoint) {
    return;
  }
  calculator.firstOperand += e.target.innerText;
  display.innerText = calculator.firstOperand;
}

const displayValues = (value) => {
  const display = document.querySelector(".display-1");
  display.innerText = value;
};

let temp = "";
const cal = (txt) => {
 
  temp += txt;
  displayValues(temp);
};

const handleClick = (e) => {
  console.log(e);
  const text = readInnerText(e);
  console.log(text);
  cal(text);
};

const readInnerText = (e) => {
  return e.target.innerText;
};
// looping through all numbers
numberButtons.forEach((number) => {
  console.log(number);
  number.addEventListener("click", handleClick);
});
// looping through all operators
operationButtons.forEach((operator) => {
  //console.log(operator)
  operator.addEventListener("click", handleClick);
});

function calculate(firstOperand, operator, secondOperand) {
  const operation = {
    add: "+",
    subtract: "-",
    divide: "/",
    mltiply: "*",
    modulus: "%",
    exponet: "^",
  };

  // array for Order of Operation and precedence
  let order = [
    operation.divide,
    operation.mltiply,
    operation.modulus,
    operation.exponet,
    operation.add,
    operation.subtract,
  ];

 
  if (operator === order[0]) {
    //console.log("mult", order[0], firstOperand * secondOperand);
    return firstOperand / secondOperand;
  } else if (operator === order[1]) {
    return firstOperand * secondOperand;
  } else if (operator === order[2]) {
    return firstOperand % secondOperand;
  } else if (operator === order[3]) {
    return firstOperand ** secondOperand;
  } else if (operator === order[4]) {
    return parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === order[5]) {
    return firstOperand - secondOperand;
  }
}
//console.log(Calculate(firstOperand,operator, secondOperand))

equalsButton.addEventListener("click", () => {
  const display1 = document.querySelector(".display-1");
  console.log("display", display1.innerText.split(""));
  handleDisplayValues();
});

function handleDisplayValues() {
  const display1 = document.querySelector(".display-1");
  let splitArray = display1.innerText.split("");

  let newArray = splitArray.map((value) =>{
    if(value==='X')return '*';
    if(value==='+')return '+';
    if(isNaN(value)) return value;
    return value;
  });

  function finalCal(){
  const  anotherArray = calculate(newArray[0],newArray[1],newArray[2])
  const removePortion = newArray.splice(0,3, anotherArray)
  // console.log(removePortion)
  console.log("newArray", newArray);
  console.log("anotherArray", anotherArray);
 display1.innerText = anotherArray;
}
finalCal();
finalCal();
finalCal();
finalCal();
}
/* create function to recieve an array as a parameter. NB new array from display
inside the function loop through the array and check for the first operation to be carried out using BODMAS
after finding an operation to be carried out , find out whether it is at the beginning or end of the array. 
If it is at the beginning, call the calculate function and pass the parameters from index 0 to index 2 
Slice the original array and put the results calculte function at the start of the new array
I it is at the end, pass the last three elements witrhin the array as parameters to the calculate function. 
Slice the original array and out the returned  value at the end of the new array.



*/

deleteButton.addEventListener("click", (e) => {
  const display = document.querySelector(".display-1");
  display.innerText = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
});

resetButton.addEventListener("click", (e) => {
  const display = document.querySelector(".display-1");
  display.innerText = "";
  temp = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
});


