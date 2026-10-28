// Constants for better maintainability
const OPERATORS = ['+', '-', '*', '/'];
const OPERATOR_REGEX = /[+\-*/]/;
const OPERATOR_AT_END_REGEX = /[+\-*/]$/;
const DOUBLE_OPERATOR_REGEX = /[+\-*/]-$/;
const DEFAULT_DISPLAY = '0';
const ANIMATION_DURATION = 150;

// State variables to track calculator state
let display = DEFAULT_DISPLAY;
let formula = '';
let evaluated = false;
let history = []; // Add history tracking

// Get DOM elements
const displayElement = document.getElementById('display');
const formulaElement = document.querySelector('.formula');

// Update display function with improved animation
function updateDisplay() {
  displayElement.textContent = display;
  formulaElement.textContent = formula || DEFAULT_DISPLAY;
  
  // Add a subtle animation effect when display updates
  displayElement.classList.add('update-animation');
  setTimeout(() => {
    displayElement.classList.remove('update-animation');
  }, ANIMATION_DURATION);
}

// Clear calculator function
function clearCalculator() {
  display = DEFAULT_DISPLAY;
  formula = '';
  evaluated = false;
  updateDisplay();
}

// Handle number input
function handleNumber(num) {
  if (evaluated) {
    display = num;
    formula = num;
    evaluated = false;
  } else {
    if (display === DEFAULT_DISPLAY || OPERATOR_AT_END_REGEX.test(display)) {
      display = num;
      formula = formula + num;
    } else {
      display = display + num;
      formula = formula + num;
    }
  }
  updateDisplay();
}

// Handle decimal input
function handleDecimal() {
  if (evaluated) {
    display = '0.';
    formula = '0.';
    evaluated = false;
  } else {
    if (!/\./.test(display)) {
      display = display + '.';
      formula = formula + '.';
    }
  }
  updateDisplay();
}

// Handle operator input - improved logic
function handleOperator(op) {
  if (evaluated) {
    formula = display + op;
    display = op;
    evaluated = false;
  } else {
    // Special case for minus as negative sign
    if (op === '-' && OPERATOR_AT_END_REGEX.test(formula) && !DOUBLE_OPERATOR_REGEX.test(formula)) {
      formula = formula + op;
      display = op;
    } else if (OPERATOR_AT_END_REGEX.test(formula)) {
      // More consistent operator replacement
      if (DOUBLE_OPERATOR_REGEX.test(formula)) {
        // If we have two operators (second being minus), replace both
        formula = formula.slice(0, -2) + op;
      } else {
        // Replace the last operator
        formula = formula.slice(0, -1) + op;
      }
      display = op;
    } else {
      formula = formula + op;
      display = op;
    }
  }
  updateDisplay();
}

// Calculate function with improved error handling
function calculate() {
  if (!formula) return;
  
  try {
    // Save the calculation to history
    const originalFormula = formula;
    
    // Ensure formula doesn't end with an operator
    let formulaToEvaluate = formula;
    if (OPERATOR_AT_END_REGEX.test(formulaToEvaluate)) {
      formulaToEvaluate = formulaToEvaluate.slice(0, -1);
    }
    
    // Improved operator handling
    formulaToEvaluate = formulaToEvaluate.replace(/([+\-*/])+/g, (match, operator) => {
      if (match.includes('-') && match.length > 1) {
        // Handle negative numbers
        return match.slice(-2);
      }
      return match.slice(-1);
    });
    
    // Use Function instead of eval for better safety
    const result = Function('"use strict";return (' + formulaToEvaluate + ')')();
    
    // Handle NaN and Infinity
    if (!isFinite(result)) {
      throw new Error('Invalid calculation result');
    }
    
    // Ensure precision for decimal calculations
    const formattedResult = parseFloat(result.toFixed(10)).toString();
    
    // Add to history
    history.push({
      formula: originalFormula,
      result: formattedResult
    });
    
    // Update display
    display = formattedResult;
    formula = formulaToEvaluate + '=' + formattedResult;
    evaluated = true;
    updateDisplay();
  } catch (error) {
    display = 'Error';
    console.error('Calculation error:', error);
    
    // Auto-clear after error display
    setTimeout(() => {
      clearCalculator();
    }, 1500);
  }
}

// Initialize buttons with event listeners
function initializeButtons() {
  // Number buttons - use a more concise approach
  const numberButtons = [
    { id: 'zero', value: '0' },
    { id: 'one', value: '1' },
    { id: 'two', value: '2' },
    { id: 'three', value: '3' },
    { id: 'four', value: '4' },
    { id: 'five', value: '5' },
    { id: 'six', value: '6' },
    { id: 'seven', value: '7' },
    { id: 'eight', value: '8' },
    { id: 'nine', value: '9' }
  ];
  
  numberButtons.forEach(button => {
    document.getElementById(button.id)
      .addEventListener('click', () => handleNumber(button.value));
  });
  
  // Operator buttons
  document.getElementById('add').addEventListener('click', () => handleOperator('+'));
  document.getElementById('subtract').addEventListener('click', () => handleOperator('-'));
  document.getElementById('multiply').addEventListener('click', () => handleOperator('*'));
  document.getElementById('divide').addEventListener('click', () => handleOperator('/'));
  
  // Other buttons
  document.getElementById('decimal').addEventListener('click', handleDecimal);
  document.getElementById('equals').addEventListener('click', calculate);
  document.getElementById('clear').addEventListener('click', clearCalculator);
  
  // Add button press animation
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.add('btn-press');
      setTimeout(() => {
        this.classList.remove('btn-press');
      }, 100);
    });
  });
}

// Handle keyboard input - more organized version
function handleKeyDown(event) {
  const key = event.key;
  
  // Number keys
  if (/^[0-9]$/.test(key)) {
    handleNumber(key);
    return;
  }
  
  // Handle other keys with a switch statement for better readability
  switch (key) {
    case '+':
    case '-':
    case '*':
    case '/':
      handleOperator(key);
      break;
    case '.':
      handleDecimal();
      break;
    case 'Enter':
    case '=':
      calculate();
      break;
    case 'Escape':
      clearCalculator();
      break;
    case 'Backspace':
      handleBackspace();
      break;
    default:
      // No action for other keys
      break;
  }
}

// Implement backspace functionality as separate function
function handleBackspace() {
  if (!evaluated && formula.length > 0) {
    formula = formula.slice(0, -1);
    display = formula.length > 0 ? 
      (OPERATOR_REGEX.test(formula.slice(-1)) ? formula.slice(-1) : formula.slice(-1)) : 
      DEFAULT_DISPLAY;
    updateDisplay();
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeButtons();
  updateDisplay();
});

// Add keyboard support for better accessibility
document.addEventListener('keydown', handleKeyDown);