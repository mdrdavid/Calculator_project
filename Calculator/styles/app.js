const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const resetButton = document.querySelector('.reset');
//const displayElement = document.querySelector('.display-1');
const calculator = {
    displayValue: '0',
    firstOperand: null,
    SecondOperand: null,
    operator: null,
  };
  let decimalPoint = false;

  function myFunction(e) {
    if(e.target.innerText === "." && !decimalPoint){
        decimalPoint = true;
    } else if(e.target.innerText === "." && decimalPoint){
       return;
    }
    calculator.firstOperand += e.target.innerText;
    display.innerText =  calculator.firstOperand;
   }

  // function updateDisplay(){
  //   const display = document.querySelector('.display-1');
  //   display.value= calculator.displayValue;
  // }
  // updateDisplay();

  const displayValues = (value) => {
    const display = document.querySelector(".display-1");
    display.innerText = value;
  }
  
  let temp = ""
  const cal = (txt) => {
    // if (isOperation(txt)){
  
    // }
    temp += txt;
    displayValues(temp)
    //displayElement.textContent = mycal(firstNumber, operator, secondNumber)
  }
  
  
  const handleClick = (e) => {
    // details here
    console.log(e)
    const text = readInnerText(e);
    console.log(text)
    cal(text)
  }
  
  const readInnerText = (e) => {
    return e.target.innerText
  }
  // looping through all numbers
  numberButtons.forEach( number => {
    console.log(number)
    number.addEventListener('click', handleClick)});
  // looping through all operators
   operationButtons.forEach(operator => {
     console.log(operator)
       operator.addEventListener('click', handleClick)
   });

  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.SecondOperand)  {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.SecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }
  handleOperator();


  
  function calculate(firstOperand, operator, secondOperand) {

    const operation = {
      add: '+',
      subtract: '-',
      divide: '/',
      mltiply: '*',
      modulus: '%',
      exponet: '^'
    };
  
    // array for Order of Operation and precedence
    let order = [[[operation.mltiply],[operation.divide], [operation.modulus],[operation.exponet]], [ [operation.add],[operation.subtract]] ];
  console.log(operation)
  for(let i =0; i< order.length; i++){
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
    return secondOperand;
  }

  
  function toCalculate(a, operator, b) {
    // a = a * 1;
    // b = b * 1;
    switch (operator) {
      case operation.add:
        return a + b;
        break;
      case operation.subtract:
        return a - b;
        break;
      case operation.divide:
        return a / b;
        break;
      case operation.mltiply:
        return a * b;
        break;
      case operation.modulus:
        return a % b;
        break;
      case operation.exponet:
        return Math.pow(a, b);
        break;
      default:
        null;
    }
    console.log(toCalculate(firstOperand,secondOperand))
  }
}

  equalsButton.addEventListener('click', ()=> {
  //   //if(!firstNumber || !secondNumber) return;
  //   decimalPoint= false;
  calculate(this.result);
  //   //clearAll();
  const display1 = document.querySelector(".display-1")
    display1.innerText= calculate('3','*','3','+', '2', '+', 4);
 console.log('equal', this.firstOperand, this.operator, this.secondOperand)

  const display = document.querySelector(".display-1");
  display.innerText= this.result;
     });
     
   deleteButton.addEventListener('click', (e) => {
    const display = document.querySelector(".display-1");
     display.innerText = '';
       firstOperand = '';
       secondOperand = '';
       operator ='';
     })
    
     resetButton.addEventListener('click', (e) =>{
      const display = document.querySelector(".display-1");
         display.innerText = '';
         temp=""
        firstOperand = '';
        secondOperand = '';
         operator = '';
         result = '';
     })
   
  



