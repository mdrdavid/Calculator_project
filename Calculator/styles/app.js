  
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
     else{
         prev += e.target.innerText;
     }
     current += e.target.innerText;
     displayElement2.innerText = current;
     displayElement1.innerText = prev;
     
     console.log(current)
     //console.log(prev)
     //calculate();
    }


    operationButtons.forEach(operator => {
        operator.addEventListener('click',(e)=>{
            if(operator!=='='){// If the operator is not equals
            operator = e.target.innerText;
            operationButtons.textcontent= operator
            console.log(operator)
           
        }else{
            console.log(prev)
        }
      
        });
    });
    
    function calculate(){
        let result;
       // displayElement2.innerText = result;
        let operation;
        switch (operation) {
          case '+':
            result= parseFloat(prev) + parseFloat(current)
            console.log(result);
            break;
          case '-':
            result= prev - current
            break
          case 'X':
            result = prev * current
            break
          case '/':
            result = prev / current
            break
          default:
            return
        }
    }


function clearLast(){

}
deleteButton.addEventListener('click', button => {
    
  })
  function clearAll(){

  }
  resetButton.addEventListener('click', button =>{
      
  })

  equalsButton.addEventListener('click', button => {
 calculate();
  })
