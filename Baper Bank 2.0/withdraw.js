document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueByID(
    "withdraw-input-amount-field"
  );

  const previousWithdrawTotal = getTextElementValueById(
    "base-withdrawn-amount"
  );
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  const previousTotalBalance = getTextElementValueById("base-balance-amount");

  const newBalanceTotal = previousTotalBalance - newWithdrawAmount;

  if (previousTotalBalance < newWithdrawAmount) {
    alert("Oi bal.. Baper bank e eto tk nai");
    return 0;
  } else {
    setInnerTextByID("base-withdrawn-amount", currentWithdrawTotal);
    setInnerTextByID("base-balance-amount", newBalanceTotal);
  }
});
