
var password = prompt("Enter Password");
let hasMunimumLength = password.length>=8;
let uppercase = /[A-Z]/.test(password);
let hasNumber =/[0-9]/.test(password);
if(!hasMunimumLength){
  alert("Your password atlest 8 Character...");
  console.log("Your password atlest 8 character...");
}
else if(!uppercase){
  alert("Your password later must be Uppercase later");
  console.log("Your password later must be upperCsae later");
}
else if(!hasNumber){
  alert("Your Password must be number:");
  console.log("Your password must be numner");
}
else{
  alert("Congratulation you are selected the correct password");
  console.log("Congratulation you are selected the correct password");
}
