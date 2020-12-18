const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandtextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



function getPrevious(){
    return previousOperandtextElement.innerText
}

function setPrevious(num){
    if(num==='.' && getPrevious().includes('.')) return
    previousOperandtextElement.append(num)
}

function setPreviousOperator(operator){

    var lastOperator = getPrevious().charAt(getPrevious().length-1)
    if(lastOperator==="")return
    else if(lastOperator==='+' || lastOperator==='-' || lastOperator==='*' || lastOperator==='/')return
   
    previousOperandtextElement.append(operator)
  
}

function getCurrent(){
    return currentOperandTextElement.innerText
}

function setCurrent(num){
    return currentOperandTextElement.innerText = getFormattedNumber(num)
}

function getFormattedNumber(num){
     var n = Number(num)
     var value = n.toLocaleString('en')
     return value
    }

allClearButton.addEventListener('click',()=>{
        previousOperandtextElement.innerText=""
        currentOperandTextElement.innerText=""
    })

deleteButton.addEventListener('click',()=>{
   var previousDeleted= getPrevious().substr(0,getPrevious().length-1)
     previousOperandtextElement.innerText = previousDeleted
})

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        setPrevious(button.innerText)
        
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
    
        var operatorInput = button.innerText
        setPreviousOperator(operatorInput)
        
        
    })
})

equalButton.addEventListener('click',()=>{
   
    var result = eval(getPrevious())
    setCurrent(result)
    previousOperandtextElement.innerText=result
       
})





