// Append a value to the result input
function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

// Clear the result input
function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

// Calculate the result and display it
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        // Evaluate the expression
        resultField.value = eval(resultField.value);
    } catch (error) {
        // Handle invalid expressions
        resultField.value = 'Error';
    }
}
