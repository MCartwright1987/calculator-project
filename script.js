let justCalculated = false;
let display = document.getElementById('display');

function appendNumber(number) {
  // clear display if number pressed after calcultaion
  if (justCalculated && !isNaN(number)) {
    display.value = '';  // Clear the display
  }
  //add the number to the display
  display.value += number; 

  justCalculated = false;  
  }
  
  function clearDisplay() {
    display.value = '';

    justCalculated = false; 
  }
  
  
  function calculate() {
    try {
      // Calculate the result using Math.js Library
      let result = math.evaluate(display.value);

      // Update the display with the result
      display.value = result.toString(); 

      justCalculated = true;
    } catch (error) {
      // Show error message if expression is invalid
      display.value = 'Error'; 

      justCalculated = false;
    }
  }