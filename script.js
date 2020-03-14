// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUppercase;
var ConfirmLowercase;
var choices;
// Start Password Variable values
// special characters
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "<", ">", "+", "=", "."]
//number
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//lower case letter
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//uppecase
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});


// Write password to the #password input
function generatePassword() {
  var passLength = prompt("Enter Desired Password Length. Min 8 Characters and 128 Max.");

  // Verify that password length meets requirements and creates an array that is the same length as the user input.
  if (passLength >= 8 && passLength <= 128) {
    var newPasswordLength = parseInt(passLength);
    console.log(newPasswordLength)
    //var newPasswordLength = passLength;
    //console.log(newPasswordLength);
    var confirmUppercase = confirm("Have Password Contain Uppercase Letters?");
    var confirmLowercase = confirm("Have Password Contain Lowercase Letters?");
    var confirmNumbers = confirm("Have Password Contain Numbers?");
    var confirmSpecial = confirm("Have Password Contain Special Characters?");

    var newPasswordLength;
    if (confirmUppercase && confirmLowercase && confirmNumbers && confirmSpecial) {
      // var all = uppercase + lowercase + number + special;
      var all = uppercase.concat(lowercase, number, special);
      console.log(all)
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }

    // 2.) only uppercase, lowercase, & numbers are selected
    else if (confirmUppercase && confirmLowercase && confirmNumbers) {
      var all = uppercase.concat(lowercase, number);
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }

    // 3.) only uppercase & lowercase are selected
    else if (confirmUppercase && confirmLowercase) {
      var all = uppercase.concat(lowercase);
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }



    // 4.) only uppercase is selected
    else if (confirmUppercase) {
      var all = uppercase;
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }


    // 5.) only lowercase is selected
    else if (confirmLowercase) {
      var all = lowercase;
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }


    // 6.) only numbers are selected
    else if (confirmNumbers) {
      var all = number;
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }


    // 7.) only symbols are selected
    else if (confirmSpecial) {
      var all = special;
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }

    // 8.) only numbers & symbols are selected
    else if (confirmNumbers && confirmSpecial) {
      var all = number.concat(special);
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }


    // 9.) only lowercase & numbers are selected
    else if (confirmLowercase && confirmNumbers) {
      var all = lowercase.concat(number);
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    }


    // 10.) only lowercase & numbers are selected
    else if (confirmLowercase && confirmSpecial) {
      var all = lowercase.concat(special);
      var password = '';
      for (var index = 0; index < newPasswordLength; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all[(character, character + 1)];
      }
      document.getElementById("password").innerHTML = password;
    } else {
      alert("Please select at least one conditional choice from lower or uppercase letters, numbers, or special characters");
      alert("Please enter a number between 8 and 128");
    }
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    }
    console.log(password);

    function copyClipboard() {
      var copyText = document.getElementById("password");
      var text = copyText.textContent;
      if (text.length > 0) {
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Your password has been copied to clipboard.");
      }
    }
  }
}