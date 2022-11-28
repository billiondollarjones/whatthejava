// the different options for the password //
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var lowercase = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','U','X','Y','Z']
var special =['!','@','#','$','%','^','&','*']

// matching the password criteria from the readme //
function getPasswordCriteria(){
  var userChoseNumbers = confirm("Do you want to use a number?");
  var userChoseLowercase = confirm("Do you want to use a lowercase letter?");
  var userChoseUppercase = confirm("Do you want to use an uppercase letter?");
  var userChoseSpecial = confirm("Do you want to use a special character?");

  // struggling here. when I put in all the password criteria, it turns red //
  var options = {
    userChoseLowercase:userChoseLowercase
  }
  return options;
}

function createRandom(length){
  var randomnum = Math.floor(Math.random() * length);
  return randomnum;
}

// tried using if scenarios for each var option // 
function generatePassword(){
  var userChose = getPasswordCriteria();
  var availableChar = [];
  console.log(userChose)
  var passwordArr = [];
  if(userChose.userChoseNumbers){
    availableChar = availableChar.concat(numbers)
  }
  if(userChose.userChoseLowercase){
    availableChar = availableChar.concat(lowercase)
  }
  if(userChose.userChoseUppercase){
    availableChar = availableChar.concat(uppercase)
  }
  if(userChose.userChoseSpecialchar){
    availableChar = availableChar.concat(specialchar)
  }

  for(var i = 10; i < 20; i++){
    passwordArr.push(availableChar[createRandom(availableChar.length)])
  }

  return passwordArr.join("")
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
