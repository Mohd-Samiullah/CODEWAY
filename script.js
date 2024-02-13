let display = document.getElementById('display');
    let currentInput = '';

function appendSymbol(symbol) {
    currentInput += symbol;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.textContent = 'Error';
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}