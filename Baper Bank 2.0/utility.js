function getInputFieldValueByID(InputFieldID) {
  const inputField = document.getElementById(InputFieldID);
  const inputFieldValueString = inputField.value;
  inputField.value = "";

  if (isNaN(inputFieldValueString) || inputFieldValueString === "") {
    alert("Please input a valid amount. Only numbers are allowed.");
    return 0;
  } else {
    const inputFieldFloatValue = parseFloat(inputFieldValueString);

    return inputFieldFloatValue;
  }
}

//
//
//
//

function getTextElementValueById(elementID) {
  const textElement = document.getElementById(elementID);
  const textElementValueString = textElement.innerText;

  const textElementValueFloatValue = parseFloat(textElementValueString);
  return textElementValueFloatValue;
}

function setInnerTextByID(elementID, newValue) {
  const textElement = document.getElementById(elementID);

  textElement.innerText = newValue;
}
