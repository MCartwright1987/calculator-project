// Function to append numbers or operators to the display
let justCalculated = false;

function appendNumber(number) {
    let display = document.getElementById('display');
  // If the result was just calculated and the user presses a number, clear the display
  if (justCalculated && !isNaN(number)) {
    display.value = '';  // Clear the display
  }

  justCalculated = false;  
  display.value += number; 
  }
  
  function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '';
    justCalculated = false; 
  }
  
  // Calculate the result using Math.js
  function calculate() {
    let display = document.getElementById('display');
    try {
      // Evaluate the current value in the input field
      let result = math.evaluate(display.value);
      display.value = result.toString(); // Update the display with the result
      justCalculated = true;
    } catch (error) {
      display.value = 'Error'; // Show error message if expression is invalid
      justCalculated = false;
    }
  }