document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueByID("deposit-input-amount-field");

  const previousDepositTotal = getTextElementValueById("base-deposited-amount");

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

});
