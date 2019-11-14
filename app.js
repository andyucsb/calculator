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
