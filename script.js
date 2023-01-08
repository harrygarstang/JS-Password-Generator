// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Password gen values 


// Function to query user for length and character types of password [console.logs to be deleted]
function getPasswordOptions() {
  var passwordLength = prompt("Please enter the desired length of password:");
  let num = Number(passwordLength);
  if (num >= 10 && num <= 64) {
    console.log("User has opted for a password length of: " + num);
  } else {
    return alert("Password must be between 10 and 64 characters");
  }
  var lowerCase = confirm("Do you wish to include lowercase characters?");
  if (lowerCase) {
    console.log("User has opted to include lower case characters");
  } else {
    console.log("User has opted NOT to include lower case characters");
  }
  var upperCase = confirm("Do you wish to include upper case characters?")
  if (upperCase) {
    console.log("User has opted to include upper case characters");
  } else {
    console.log("User has opted NOT to include upper case characters");
  }
  var numerics = confirm("Do you wish to include numerical characters?")
  if (numerics) {
    console.log("User has opted to include numerical characters");
  } else {
    console.log("User has opted NOT to include numerical characters");
  }
  var specialCharactersInput = confirm("Do you wish to include special characters?");
  if (specialCharactersInput) {
    console.log("User has opted to include special characters");
  } else {
    console.log("User has opted NOT to include special characters");
  }
};


// call function 
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var randomArrayElement = Math.floor(Math.random() * arr.length);
  return arr[randomArrayElement];
}

// Storing generated password in this variable


// Function using for loop to push randomly selected elements to be stored into (above) new array
function generatePassword() {
  var GeneratedPassword = [];
  for (var i = 0; i < 3; i++) {
    var randomElement1 = getRandom(specialCharacters);
    var randomElement2 = getRandom(lowerCasedCharacters);
    var randomElement3 = getRandom(numericCharacters)
    var randomElement4 = getRandom(upperCasedCharacters)
    GeneratedPassword.push(randomElement1, randomElement2, randomElement3, randomElement4);
  } 
  return GeneratedPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// I want to pick random elements from each array 
// I want these elements to be put together into a new array 
// I want this new array to be stored in a variable 
// I want said variable to be displayed on the UI 
