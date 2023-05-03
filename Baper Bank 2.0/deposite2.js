document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueByID("deposit-input-amount-field");

  const previousDepositTotal = getTextElementValueById("base-deposited-amount");

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  setInnerTextByID("base-deposited-amount", currentDepositTotal);

  const previousTotalBalance = getTextElementValueById("base-balance-amount");

  const newBalanceTotal = previousTotalBalance + newDepositAmount;

  setInnerTextByID("base-balance-amount", newBalanceTotal);
});
