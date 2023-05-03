//  getting email id...

// document.getElementById("email-field").addEventListener("keyup", function () {
//   const emailID = document.getElementById("email-field").value;

//   const password = document.getElementById("password-field").value;

//   if (emailID.endsWith("@gmail.com") && password.length >= 8) {
//     document.getElementById("submit-btn").removeAttribute("disabled");
//   } else {
//     document.getElementById("submit-btn").setAttribute("disabled", true);
//   }
// });

// document
//   .getElementById("password-field")
//   .addEventListener("keyup", function () {
//     const emailID = document.getElementById("email-field").value;

//     const password = document.getElementById("password-field").value;

//     if (emailID.endsWith("@gmail.com") && password.length >= 8) {
//       document.getElementById("submit-btn").removeAttribute("disabled");
//     } else {
//       document.getElementById("submit-btn").setAttribute("disabled", true);
//     }
//   });

// document.getElementById("submit-btn").addEventListener("click", function () {
//   window.location.href = "bank.html";
// });

//
//
//
//

// document.getElementById("email-field").addEventListener("keyup", function () {
//   const emailID = document.getElementById("email-field").value;

//   const password = document.getElementById("password-field").value;

//   if (emailID.endsWith("@gmail.com") && password.length >= 8) {
//     document.getElementById("submit-btn").removeAttribute("disabled");
//   } else {
//     document.getElementById("submit-btn").setAttribute("disabled", true);
//   }
// });

// document
//   .getElementById("password-field")
//   .addEventListener("keyup", function () {
//     const emailID = document.getElementById("email-field").value;

//     const password = document.getElementById("password-field").value;

//     if (emailID.endsWith("@gmail.com") && password.length >= 8) {
//       document.getElementById("submit-btn").removeAttribute("disabled");
//     } else {
//       document.getElementById("submit-btn").setAttribute("disabled", true);
//     }
//   });

// document.getElementById("submit-btn").addEventListener("click", function () {
//   window.location.href = "bank.html";
// });

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


function InputField(IdName) {
  document.getElementById(IdName).addEventListener("keyup", function () {
    const emailID = document.getElementById("email-field").value;

    const password = document.getElementById("password-field").value;

    if (emailID.endsWith("@gmail.com") && password.length >= 8) {
      document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
      document.getElementById("submit-btn").setAttribute("disabled", true);
    }
  });
}

const emailID = "email-field";
InputField(emailID);

const password = "password-field";
InputField(password);

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  window.location.href = "bank.html";
});
