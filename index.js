// put all the action elements into variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");

//Functions
// create the functions globally to be used anywhere

// Show error Function
function showError(input, message) {
  // outline input with red AND change status of form-control classes to .error on the small element
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector(".small");
  small.innerText = message;
}

// Show success Function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email Validation Function
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// add the event listeners for the form
// form.addEventListener("submit", function (e) {
//   e.preventDefault(); //needed to prevent form from refreshing on submit

//   // if username input value is left blank
//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }

//   // if email input value is left blank
//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email is not Valid");
//   } else {
//     showSuccess(email);
//   }

//   // if Password input value is left blank
//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }

//   // if Password Repeat input value is left blank
//   if (password2.value === "") {
//     showError(password2, "Password is required");
//   } else {
//     showSuccess(password2);
//   }
// });

// new functions to allow for scalable code
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get Field Name
function getFieldName(input) {
  // gets the first letter of the word and makes it uppercase then contatenate the rest of the word
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); //needed to prevent form from refreshing on submit
  checkRequired([username, email, password, password2]);
});
