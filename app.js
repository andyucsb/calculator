function clearDisplayValue() {
  setDisplayValue(null);
}

function getDisplayInputElement() {
  return document.querySelector('#display');
}

function setDisplayValue(displayValue) {
  let displayInputElement = getDisplayInputElement();
  displayInputElement.value = displayValue;
}

// eslint-disable-next-line no-unused-vars
function handleNumberButtonClick(number) {
  setDisplayValue(number);
}  

// eslint-disable-next-line no-unused-vars
function handleOperatorButtonClick(operator) {
  switch (operator) {
    case 'AC': {
      clearDisplayValue(); 
    }
  }
}