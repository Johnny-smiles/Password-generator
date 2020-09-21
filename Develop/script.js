// Assignment code here
//var numbers = [0,1,2,3,4,5,6,7,8,9,];
//var lowerCase = ["a","b","c","d","e","f","g","h",
//"i", "j","k", "l", "m", "n", "o","p","q","r","s","t","u","v","w","x","y","z"];
//var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
//"T","U,","V","W", "X", "Y", "Z"];
//var specialCharacters = ["!","@", "$","#","%","^","&","*","(",")"];

var characters = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h",
"i", "j","k", "l", "m", "n", "o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U,","V","W", "X", "Y", "Z","!","@", "$","#","%","^","&","*","(",")"]
var arrayCharacters;
var newPassword = "";
debugger

//function to prompt how long the password needs to be. 
function getNumberOfCharacters()  {
  getNumberOfCharacters  = "";
    while(getNumberOfCharacters  < 8 || getNumberOfCharacters  > 128 || getNumberOfCharacters  === null) {
      getNumberOfCharacters  = prompt("Choose password length between 8 and 128 characters .");
    }
    console.log(getNumberOfCharacters);
    return getNumberOfCharacters;
    
}

getNumberOfCharacters()
console.log("Your password length is " + getNumberOfCharacters + " characters long.")

//gen random number.
function randomNumber (){
  Math.floor(Math.random() *(characters.length) + 1);
 }  



//number or iterations
generatePassword = function() {
  for (i = 1; i != getNumberOfCharacters; i++){
       randomNumber();
       newPassword = newPassword += characters[randomNumber];
       }
 return newPassword
  
}
//return newPassword

//return arrayCharacters


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
