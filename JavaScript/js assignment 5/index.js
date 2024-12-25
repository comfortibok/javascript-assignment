const form = document.getElementById("form");

// Username validation
function validateUserName() {
  const username = document.getElementById("username");
  const usernameError = document.getElementById("usernameError");
  if (username.value.length < 4) {
    usernameError.textContent = "Username must be at least 4 characters long.";
    usernameError.style.display = "block";
    return false;
  } else {
    usernameError.textContent = "";
    usernameError.style.display = "none";
    return true;
  }
}
document.getElementById("username").addEventListener("input", validateUserName);

// Email validation
function validateEmail() {
  const emailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!emailInput.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
    return true;
  }
}
document.getElementById("email").addEventListener("input", validateEmail);

// Password Validation
function validatePassWord() {
  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password.value)) {
    passwordError.textContent =
      "Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, and 1 number.";
    passwordError.style.display = "block";
    return false;
  } else {
    passwordError.textContent = "";
    passwordError.style.display = "none";
    return true;
  }
}
document.getElementById("password").addEventListener("input", validatePassWord);

// Confirm password
function validateConfirmPassWord() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent =
      "Passwords do not match! Confirm your password again.";
    confirmPasswordError.style.display = "block";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordError.style.display = "none";
    return true;
  }
}
document
  .getElementById("confirmPassword")
  .addEventListener("input", validateConfirmPassWord);

// Date of birth validation
function validateDateOfBirth() {
  const dob = document.getElementById("dob");
  const dobError = document.getElementById("dobError");
  const dobDate = new Date(dob.value);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  if (isNaN(age) || age < 18) {
    dobError.textContent = "You must be at least 18 years old.";
    dobError.style.display = "block";
    return false;
  } else {
    dobError.textContent = "";
     dobError.style.display = "none";
    return true;
  }
}
document.getElementById("dob").addEventListener("input", validateDateOfBirth);

// Country validation
function validateCountry() {
  const country = document.getElementById("country");
  const countryError = document.getElementById("countryError");
  if (country.value === "") {
    countryError.textContent = "Please select a country.";
    countryError.style.display = "block";
    return false;
  } else {
    countryError.textContent = "";
    countryError.style.display = "none";
    return true;
  }
}
document.getElementById("country").addEventListener("change", validateCountry);

// Terms validation
function validateTerms() {
  const terms = document.getElementById("terms");
  const termsError = document.getElementById("termsError");
  if (!terms.checked) {
    termsError.textContent = "You must agree to the terms and conditions.";
    termsError.style.display = "block";
    return false;
  } else {
    termsError.textContent = "";
    termsError.style.display = "none";
    return true;
  }
}
document.getElementById("terms").addEventListener("change", validateTerms);

// Form Submit
function handleSubmit(event) {
  event.preventDefault();
  // Validation checks
  const isUserNameValid = validateUserName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassWord();
  const isConfirmPasswordValid = validateConfirmPassWord();
  const isDobValid = validateDateOfBirth();
  const isCountryValid = validateCountry();
  const isTermsValid = validateTerms();
  if (
    isUserNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isDobValid &&
    isCountryValid &&
    isTermsValid
  ) {
    alert("Form submitted successfully!");
  } else {
    alert("Please correct the errors before submitting.");
  }
}
form.addEventListener("submit", handleSubmit);
