// Assignment code
var generateBtn = document.querySelector("#generate");

// define characters types for options
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeric = '0123456789';
const special = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
  var password = ''; //local password variable
  var lengthChoice = window.prompt("Enter a Password Length between 8 and 128 characters"); //choose pw length, then verify requirements: 8< letters in pw <128
  if (lengthChoice > 8 && lengthChoice <128) {
    lengthChoice ;
  } else if (lengthChoice < 8 || lengthChoice >128) {
    alert("Invalid password length. Please enter a number between 8 and 128.")
    return;
  }
  
  //confirmations for character types after length prompt / user event trigger
  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  //validation that at least 1 character type has been selected, alert if not satisfied
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least 1 type of character.");
    return;
  }
  console.log('still running 1');
  // Logic to setup character set included to generate password, and exclude others
  var characters = '';
  if (includeLowercase) {
    characters += lowercase;
  }
  if (includeUppercase) {
    characters += uppercase;
  }
  if (includeNumeric) {
    characters += numeric;
  }
  if (includeSpecial) {
    characters += special;
  }
  console.log(characters);

  // Generate the password - increment through password length, returning a random character (index) from the character set 
  for (let i = 0; i < lengthChoice; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
    return password;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);