  
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const resetButton = document.querySelector('.reset');
const display = document.querySelector('output');
const displayElement1 = document.querySelector('.previous-number');
const displayElement2 = document.querySelector('.current-number');
let displayValue;
let prev = '';
let current = '';
let result = null;
let lastOperation = '';
let decimalPoint = false;


 numberButtons.forEach( number => {
   number.addEventListener('click', myFunction);
 })

 function myFunction(e) {
     if(e.target.innerText === "." && !decimalPoint){
         decimalPoint = true;
     } else if(e.target.innerText === "." && decimalPoint){
        return;
     }
     current += e.target.innerText;
     displayElement2.innerText = current;
     console.log(current)
    }


    operationButtons.forEach(operator => {
        operator.addEventListener('click',(e)=>{
            operator = e.target.innerText;
            //display= e.target.innerText;
            console.log(operator)
            console.log(prev)

        });
    });
    

    // calculate() {
    //     let computation;
    //     const prev = parseFloat(previousNumber)
    //     const current = parseFloat(currentNumber)
    //     if (isNaN(prev) || isNaN(current)) return
    //     switch (operator) {
    //       case '+':
    //         computation = prev + current
    //         break
    //       case '-':
    //         computation = prev - current
    //         break
    //       case '*':
    //         computation = prev * current
    //         break
    //       case '÷':
    //         computation = prev / current
    //         break
    //       default:
    //         return
    //     }
    // }