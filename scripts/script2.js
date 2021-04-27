const numberButtons = document.querySelectorAll('.number')
const signButtons = document.querySelectorAll('.sign')
const screen = document.querySelector('.screen')
const displayNumbers = document.querySelector('.displayNumbers')
const previousNumberDisplay = document.querySelector('.previousNumber')
const equalButton = document.querySelector('.equal')
const check = document.querySelector('.check')
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')

let previousNumber = ''
let currentNumber = ''
let operator = ''

function roundNum(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

const appendNumber = function() {
    previousNumber = ''
    previousNumber = previousNumber + currentNumber
    previousNumberDisplay.textContent = previousNumber
    displayNumbers.textContent = ''
    previousNumberDisplay.textContent = previousNumber
    currentNumber = ''
}

const sum = function(currentNumber, previousNumber) {
    operator = '+'
    currentNumber = Number(currentNumber) + Number(previousNumber)
    displayNumbers.textContent = currentNumber
    previousNumber = ''
    previousNumberDisplay.textContent = previousNumber
}

const sub = function(currentNumber, previousNumber) {
    operator = '-'
    currentNumber = Number(currentNumber) - Number(previousNumber)
    displayNumbers.textContent = currentNumber
    previousNumber = ''
    previousNumberDisplay.textContent = previousNumber
}

const mult = function(currentNumber, previousNumber) {
    operator = 'x'
    currentNumber = Number(currentNumber) * Number(previousNumber)
    displayNumbers.textContent = currentNumber
    previousNumber = ''
    previousNumberDisplay.textContent = previousNumber
}

const div = function(currentNumber, previousNumber) {
    operator = '/'
    currentNumber = Number(currentNumber) / Number(previousNumber)
    displayNumbers.textContent = roundNum(currentNumber)
    previousNumber = ''
    previousNumberDisplay.textContent = previousNumber
}

const residual = function(currentNumber, previousNumber) {
    operator = '%'
    currentNumber = Number(currentNumber) % Number(previousNumber)
    displayNumbers.textContent = currentNumber
    previousNumber = ''
    previousNumberDisplay.textContent = previousNumber
}

let operate = function(){
    if (operator == '-'){
        sub(currentNumber, previousNumber)
    } else if (operator == '+'){
        sum(currentNumber, previousNumber)
        currentNumber = displayNumbers.textContent
    } else if (operator == '/'){
        div(currentNumber, previousNumber)
        currentNumber = displayNumbers.textContent
    } else if (operator == '%'){
        residual(currentNumber, previousNumber)
        currentNumber = displayNumbers.textContent
    } else if (operator == 'x'){
        mult(currentNumber, previousNumber)
        currentNumber = displayNumbers.textContent
    } 
}


numberButtons.forEach(item => item.addEventListener('click', function(e){
    if (displayNumbers.textContent.includes('.') && item.textContent == '.'){
        return   
       } 
    currentNumber = currentNumber + item.textContent
    console.log(currentNumber)
    displayNumbers.textContent = currentNumber
}))

signButtons.forEach(item => item.addEventListener('click', function(e){
    if(previousNumberDisplay.textContent != '' && displayNumbers.textContent == ''){
        return
    }else if (previousNumberDisplay.textContent != '' && displayNumbers.textContent != ''){
            operate()
            previousNumber = currentNumber
            previousNumberDisplay.textContent = previousNumber
            currentNumber = ''
            displayNumbers.textContent = ''
            operator = item.textContent
        } else if (previousNumberDisplay.textContent == '' || displayNumbers.textContent == '') {
            appendNumber()
            operator = item.textContent
        }
}))

equalButton.addEventListener('click', function(e){
    if (previousNumberDisplay.textContent == '' | displayNumbers.textContent == '') {
        return
    }
    operate()
})

let clearAll = function() {
    previousNumber = ''
    currentNumber = ''
    displayNumbers.textContent = ''
    previousNumberDisplay.textContent = ''
}

let back = function() {
    currentNumber = currentNumber.replace(currentNumber[currentNumber.length - 1], '')
    displayNumbers.textContent = currentNumber
}

backspace.addEventListener('click', function(e){
    back()
})

clear.addEventListener('click', function(e){
    clearAll()
})