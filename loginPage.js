var loginEmailInput = document.querySelector('input[type="email"]');
var loginPasswordInput = document.querySelector('input[type="password"]');
var loginButton = document.querySelector('button[type="submit"]');

loginButton.onclick = function (event) {
  event.preventDefault();

  var email = loginEmailInput.value;
  var password = loginPasswordInput.value;

  clearErrorMessages();
  validateInputs(email, password);
};

loginEmailInput.addEventListener("input", function () {
  clearErrorMessage(loginEmailInput);
});

loginPasswordInput.addEventListener("input", function () {
  clearErrorMessage(loginPasswordInput);
});

// Function to validate the email and password inputs
function validateInputs(email, password) {
  var emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  var passwordIsValid = password.length >= 8;

  if (!emailIsValid) {
    displayErrorMessage(loginEmailInput, "Invalid email address.");
  }

  if (!passwordIsValid) {
    displayErrorMessage(
      loginPasswordInput,
      "Password must be at least 8 characters long."
    );
  }
}

// Function to display an error message below the specified input element
function displayErrorMessage(inputElement, errorMessage) {
  var errorElement = document.createElement("p");
  errorElement.className = "error-message";
  errorElement.textContent = errorMessage;
  inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}

// Function to clear the error message for the specified input element
function clearErrorMessage(inputElement) {
  var errorElement = inputElement.nextElementSibling;
  if (errorElement && errorElement.className === "error-message") {
    errorElement.parentNode.removeChild(errorElement);
  }
}

// Function to clear all error messages
function clearErrorMessages() {
  var errorMessages = document.getElementsByClassName("error-message");
  while (errorMessages.length > 0) {
    errorMessages[0].parentNode.removeChild(errorMessages[0]);
  }
}
