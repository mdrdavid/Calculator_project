  
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const resetButton = document.querySelector('.reset');
//const display = document.querySelector('output');
 const displayElement1 = document.querySelector('.previous-number');
const displayElement2 = document.querySelector('.current-number');

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
    }


    operationButtons.forEach( operation => {
        operation.addEventListener('click', myOperation);
      })
      function myOperation(e){
          if(!current) result;
          decimalPoint = false;
          const operationName = e.target.innerText;
          if(prev && current && lastOperation){
              mycalculation();
          } else{
              result = perseFloat(current);
          }
          clearvar(operationName);
     }
      function clearvar(name = ''){
          prev += current +' ' + ' ';
          displayElement1.innerText = prev;
      }









