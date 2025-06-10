let display = document.getElementById('display');
let clear = document.getElementById('clear');
let backspace = document.getElementById('backspace');
let equals = document.getElementById('equals');
let numbers = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
let operators = document.querySelectorAll('#add, #subtract, #multiply, #divide');
let decimal = document.getElementById('decimal');

let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

numbers.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    display.value = currentNumber;
  });
});

operators.forEach(button => {
  button.addEventListener('click', () => {
    if (currentNumber !== '') {
      previousNumber = currentNumber;
      currentNumber = '';
      currentOperator = button.textContent;
      display.value = '';
    }
  });
});

decimal.addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    display.value = currentNumber;
  }
});

equals.addEventListener('click', () => {
  if (currentNumber !== '' && previousNumber !== '') {
    let result;
    switch (currentOperator) {
      case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case '/':
        if (parseFloat(currentNumber) !== 0) {
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
        } else {
          result = 'Error: Division by zero';
        }
        break;
      default:
        result = 0;
    }
    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
  }
});

// Add event listeners for clear and backspace buttons
clear.addEventListener('click', () => {
  currentNumber = '';
  previousNumber = '';
  currentOperator = '';
  display.value = '';
});

backspace.addEventListener('click', () => {
  currentNumber = currentNumber.slice(0, -1);
  display.value = currentNumber;
});