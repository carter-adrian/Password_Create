// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  '@', '%','+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', ];
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
var upperCasedCharacters = [
  'A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
var numeralCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordOptions() {
  // 3)
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must be at less than 128 characters');
    return null;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumeralCharacters = confirm(
    'Click OK to confirm including numbers.'
  );
  
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including lowercased letters.'
  );
// Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including uppercased letters.'
  );
 // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // Object to store user input
if (hasSpecialCharacters === false && hasNumeralCharacters === false && hasLowercaseCharacters === false &&
  hasUppercaseCharacters === false) {
    alert('You must choose at least one type of character to be included in your password.');
    return null;
  };

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasNumeralCharacters: hasNumeralCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters,
    //more options here
  };
 
  return passwordOptions;

}

function generatePassword() {
  // 2)
  var options = getPasswordOptions();
  //Code Your logic Below
  // return "123456789"
var passCharacters = [];
if (options.hasSpecialCharacters === true) {
  passCharacters = passCharacters.concat(specialCharacters);
}; 
if (options.hasNumeralCharacters === true) {
  passCharacters = passCharacters.concat(numeralCharacters);
};
if (options.hasLowercaseCharacters === true) {
  passCharacters = passCharacters.concat(lowerCasedCharacters);
};
if (options.hasUppercaseCharacters === true) {
  passCharacters = passCharacters.concat(upperCasedCharacters);
};

var passwordString = ""

for (let i= 0; i < options.length; i++) {
  var randElement = getRandom(passCharacters);
  passwordString += randElement;
}
  return passwordString;
}
// Write password to the #password input
function writePassword() {
  // 1)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);