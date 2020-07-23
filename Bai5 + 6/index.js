const username = "admin";
let password;
var err = document.getElementsByClassName("err");
var sucess = document.getElementsByClassName("success")[0];
var input = document.getElementsByTagName("input"),
  inputName = input[0],
  inputPass = input[1],
  submit = input[2];
var check = 0;
function onSubmit() {
  password = localStorage.getItem("password3") || 'admin';
  if (inputName.value == "") {
    err[0].innerHTML = "Please enter a username";
    inputName.focus();
    return false;
  } else err[0].innerHTML = "";
  if (inputPass.value == "") {
    err[1].innerHTML = "Please enter a password";
    inputPass.focus();
    return false;
  } else err[1].innerHTML = "";

  if (inputName.value == username && inputPass.value == password) {
    document.getElementById("loginButton").innerHTML = "Đăng nhập thành công";
    document.getElementById("login").style.display = "none";
    return false;
  } else sucess.innerHTML = "";
  if (inputName.value != username) {
    err[0].innerHTML = "Wrong username";
    return false;
  }
  if (inputPass.value != password) {
    err[1].innerHTML = "Wrong password";
  }
  return false;
}

function onClick() {
  err[0].innerHTML = "";
  err[1].innerHTML = "";
  sucess.innerHTML = "";
  check = 1;
  inputName.type = "password";
  inputName.placeholder = "OldPassword";
  inputPass.placeholder = "NewPassword";
  submit.value = "Save";
  inputName.value = "";
  inputPass.value = "";
}

function onClick2() {
  err[0].innerHTML = "";
  err[1].innerHTML = "";
  sucess.innerHTML = "";
  check = 1;
  inputName.type = "text";
  inputName.placeholder = "Username";
  inputPass.placeholder = "Password";
  submit.value = "Login";
  inputName.value = "";
  inputPass.value = "";
  document.getElementById('login').style.display = 'none', check = 0;
}
function onSubmit1() {
  password = localStorage.getItem("password3") || 'admin';
  if (inputName.value == '') {
    err[0].innerHTML = "Please enter a old password";
    inputName.focus();
    return false;
  } else err[0].innerHTML = "";
  if (inputPass.value == '') {
    err[1].innerHTML = "Please enter a new password";
    inputPass.focus();
    return false;
  } else err[1].innerHTML = "";

  if (inputName.value != password) {
    err[0].innerHTML = "Wrong password";
    inputPass.focus();
    return false;
  } else {
    inputName.type = "text";
    inputName.placeholder = "Username";
    inputPass.placeholder = "Password";
    submit.value = "Login";
    sucess.innerHTML = "Change password successfully";
    localStorage.setItem("password3", inputPass.value);
    inputName.value = "";
    inputPass.value = "";
    check = 0;
    return false;
  }
}
