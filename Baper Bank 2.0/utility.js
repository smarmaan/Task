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

