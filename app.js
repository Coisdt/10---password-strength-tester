import { specialCharacters } from "./specialCharacters.js";

const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit-btn");
const notificationMessage = document.querySelector(".password-status");

function validation() {
  const password = input.value.trim();

  strongPassword(password);
  emptyInput(password);
  characterLength(password);
  containsSpecialCharacters(password);
  // !notThatWord(password) &
  containsCapitalLetter(password);
  containsNumbers(password);
}

submitBtn.addEventListener("click", validation);

// character length
function characterLength(password) {
  if (password.length > 7) {
    return true;
  } else {
    notificationMessage.textContent =
      "Password should be at least 8 characters long.";
    console.log("password is too short");
    return false;
  }
}

//   empty input
function emptyInput(password) {
  if (password !== "") {
    return true;
  } else {
    notificationMessage.textContent = "Please submit a password.";
    console.log("password is empty");
    return false;
  }
}

// contains special character
function containsSpecialCharacters(password) {
  if (specialCharacters.some((char) => password.includes(char))) {
    console.log("contains special charac");
    return true;
  } else if (
    password.length > 7 &&
    specialCharacters.some((char) => !password.includes(char))
  ) {
    console.log("NO speci char");
    notificationMessage.textContent =
      "Password must include special characters like '@' or '$'.";
    return false;
  }
}

// contains capital letters
function containsCapitalLetter(password) {
  // googled method params
  const capitalLetterCheck = password.match(/[A-Z]/g, "");
  if (capitalLetterCheck) {
    console.log("capital letter is used!");
    return true;
  } else if (password.length > 7 && !capitalLetterCheck) {
    notificationMessage.textContent =
      "Password should contain at least one capital letter.";
    console.log("password doesnt have a capital letter");
    return false;
  }
}

// contains numbers
function containsNumbers(password) {
  // googled method params
  const numberCheck = password.match(/[1-9]/g, "");
  if (numberCheck) {
    console.log("includes numbers");
    return true;
  } else if (password.length > 7 && !numberCheck) {
    notificationMessage.textContent =
      "Password should contain at least one number";
    return false;
  }
}

// strong password
function strongPassword(password) {
  if (
    emptyInput(password) &&
    characterLength(password) &&
    containsSpecialCharacters(password) &&
    containsCapitalLetter(password) &&
    containsNumbers(password)
  ) {
    console.log("all good");
    notificationMessage.textContent = "Password is strong";
  } else {
    console.log("code needs work");
  }
}

// not 'password'
// function notThatWord(password) {
//   if (password !== "password") {
//     notificationMessage.textContent =
//       "Password may not be the word 'password'.";
//   }
// }
