  
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const resetButton = document.querySelector('.reset');
const displayElement = document.querySelector('.display-1');
let firstNumber = '';
let secondNumber = '';
let result = null;
let decimalPoint = false;
let lastOperation ='';
let operator;
// looping through all numbers
 numberButtons.forEach( number => {
   number.addEventListener('click', (e) =>{
    // if number has no doesn't has a decimalpoint 
      if(e.target.innerText === "." && !decimalPoint){
          decimalPoint = true;
          // number already has a decimalpoint return
      } else if(e.target.innerText === "." && decimalPoint){
         return;
         
      } else{
        firstNumber += e.target.innerText;
        secondNumber += e.target.innerText;
      }
      
      displayElement.innerText = firstNumber;
      displayElement.innerText = secondNumber;
      // console.log(firstNumber);
      // console.log(secondNumber);
     })
 });

    operationButtons.forEach(operator => {
        operator.addEventListener('click',(e)=>{
          if(!firstNumber) result;
          // Allow decimalpoint in the new number
          decimalPoint= false;
            const operationName = e.target.innerText;
            if( firstNumber && secondNumber&& lastOperation){
            calculate();
            } else{
              result = parseFloat(firstNumber); 
            }
          clearAll(operationName );
          lastOperation = operationName;
          console.log(operationName)
            
        })
    });


    function clearAll(name=''){
      secondNumber += firstNumber + ' ' + name + ' ';
      displayElement.innerText = firstNumber + operationName;
    }

 function calculate(){
 let  prevNumber = parseFloat(firstNumber)
 let  currentNumber = parseFloat(secondNumber)
      if (isNaN(prevNumber) || isNaN(currentNumber)) return
if(lastOperation === '+'){
  result= prevNumber + currentNumber;
}
else if(lastOperation === 'X'){
  result= prevNumber * currentNumber;
}
else if(lastOperation === '-'){
  result= prevNumber - currentNumber
}
else if(lastOperation === '/'){
  result= prevNumber / currentNumber;
}
    }

  equalsButton.addEventListener('click',(e)=> {
 if(!firstNumber || !secondNumber) return;
 decimalPoint= false;
 calculate();
 clearAll();
 displayElement.innerText= result;
 secondNumber= result;
 firstNumber = '';

  })

  
//function clearLast(){

//}
deleteButton.addEventListener('click', (e) => {
  displayElement.innerText = '';
    firstNumber = '';
    secondNumber = '';
  })
  function clearAll(){

  }
  resetButton.addEventListener('click', (e) =>{
      displayElement.innerText = '';
      firstNumber = '';
      secondNumber = '';
      result = '';
  })
