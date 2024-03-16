let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let errorMessage = document.getElementById("error");
let errorMessage1 = document.getElementById("error1");
let errorMessage2 = document.getElementById("error2");
let errorMessage3 = document.getElementById("error3");

const email_match = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

const validUserName = () => {
  if (username.value === "") {
    errorMessage.innerHTML = "Username cannot be empty";
    username.style.borderColor = "red";
    username.style.borderWidth = "2px";
    return false;
  } else {
    errorMessage.innerHTML = "";
    username.style.borderColor = "green";
    username.style.borderWidth = '2px'
    return true;
  }
};

const validEmail = () => {
  if(!email.value.match(email_match)){
    errorMessage1.innerHTML = 'Enter a valid email';
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return false;
  }else{
    errorMessage1.innerHTML = "";
    email.style.borderColor = "green";
    email.style.borderWidth = "2px";
    return true;
  }
};

const validPassword = () => {
  if(password.value === ""){
    errorMessage2.innerHTML = 'Password required';
    password.style.borderColor = "red";
    password.style.borderWidth = "2px";
    // return false;
  }
  else if(password.value.length < 8){
    errorMessage2.innerHTML = "Password must be at least 8 character";
    password.style.borderColor = "red";
    password.style.borderWidth = "2px";
    // return false;
  }
  else{
     errorMessage2.innerHTML = "";
     password.style.borderColor = "green";
     password.style.borderWidth = "2px";
    //  return true;
  }
};

const confirmPassword = () => {
  if(password2.value === ""){
    errorMessage3.innerHTML = 'Please confirm your password';
    password2.style.borderColor = "red";
    password2.style.borderWidth = "2px";
  }else if(password2.value !== password.value){
    errorMessage3.innerHTML = 'Password does not match';password2.style.borderColor = "red";
    password2.style.borderWidth = "2px";
  }else{
    errorMessage3.innerHTML = '';
    password2.style.borderColor = "green";
    password2.style.borderWidth = "2px";
  }
};