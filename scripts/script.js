const numberButtons = document.querySelectorAll('.number')
const numberDisplay = document.querySelector('.displayNumbers')
const signButtons = document.querySelectorAll('.sign')
const equalButton = document.querySelector('.equal')

let number = ''

numberButtons.forEach(item => item.addEventListener('click', function(e) {
    number = number + item.textContent
    numberDisplay.textContent = number
    console.log(number)
    return number
}))

equalButton.addEventListener('click', function(e){
    
})


screen = document.querySelector('.screen')

