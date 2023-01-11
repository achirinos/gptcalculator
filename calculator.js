//Global variables to keep track of current number, previous number and operation
let currentNumber = '';
let previousNumber = '';
let operation = undefined;

// function to clear the display
function clear() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
}

// function to delete the last digit from current number
function backspace() {
    currentNumber = currentNumber.toString().slice(0, -1);
}

// function to add decimal point to current number
function addDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
}

// function to add number to current number
function addNumber(number) {
    currentNumber = currentNumber.toString() + number.toString();
}

// function to perform the mathematical operation
function operate(operator) {
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%') {
        previousNumber = currentNumber;
        currentNumber = '';
        operation = operator;
    } else if(operator === '=') {
        currentNumber = eval(previousNumber + operation + currentNumber);
        operation = undefined;
        previousNumber = '';
    }
}

const display = document.querySelector('.display');

// update display function
function updateDisplay() {
    display.innerHTML = currentNumber;
}


const buttons = document.querySelectorAll('.button');
buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        let value = e.target.value;
        if(value === 'clear') {
            clear(); 
            updateDisplay();
        }
        else if(value === 'backspace') {
            backspace(); 
            updateDisplay();
        }
        else if(value === '%' || value === '+' || value === '-' || value === '*' || value === '/') {
                operate(value); updateDisplay();
        } 
        else if(value === '=') {
            operate(value); updateDisplay();
        }
        else if(value === '.') 
        {
            addDecimal(); updateDisplay();
        }
        else if(isNumber(value)) {
            addNumber(value); updateDisplay();
        }
    })
})



function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

