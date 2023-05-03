// const depositInput = document.getElementById("deposit-input-amount-field");

// const baseDepositedAmount = document.getElementById("base-deposited-amount");

// const baseBalanceAmount = document.getElementById("base-balance-amount");
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// document.getElementById("deposit-btn").addEventListener("click", function () {
//   const depositInputValue = depositInput.value;

//   depositInput.value = "";
//   if (isNaN(depositInputValue) || depositInputValue == "") {
//     alert("Please input a valid amount. Only numbers are allowed.");
//     return;
//   }
//   const newDepositAmount = parseFloat(depositInputValue);

//   const previousDepositedAmount = parseFloat(baseDepositedAmount.innerText);

//   const currentDeposit = previousDepositedAmount + newDepositAmount;

//   baseDepositedAmount.innerText = currentDeposit;

//   const baseBalance = parseFloat(baseBalanceAmount.innerText);

//   const updatedBalance = baseBalance + newDepositAmount;

//   baseBalanceAmount.innerText = updatedBalance;
// });
