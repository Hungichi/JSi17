let btn = document.querySelector(".butn");
let popup = document.querySelector('.popup');
let iconclose = document.querySelector('.popup__header i');
let succ = document.querySelector('.popup__body h2');
let wornguser = document.querySelector('.popup__body h2');
let errortext = document.querySelector('.popup__body h2');
let passwordempty = document.querySelector('.popup__body h2');
let worngpass = document.querySelector('.popup__body h2');
let emailempt = document.querySelector('.popup__body h2');
let worngemail = document.querySelector('.popup__body h2');
console.log(errortext)
btn.addEventListener("click", function () {
  let getListUserLocalStorage = JSON.parse(localStorage.getItem("listUser"));
  if (getListUserLocalStorage.length < 1) {
    window.location.href = "index.html";
  }
  let emailinput = document.getElementById("email").value;
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;
  
  if (checkLoginUser(usernameInput) && checkLoginPassword(passwordInput) && checkemail(emailinput) ) {
    succ.innerHTML="login successfull"
    toggle()
  }

  //   let list = JSON.parse(localStorage.getItem("listUser"));
});

function checkLoginUser(usernameInput) {
  console.log(usernameInput);
  if (usernameInput == "") {
    errortext.innerHTML="username empty"
    toggle()
    return false;
    
  }

  let list = JSON.parse(localStorage.getItem("listUser")); // lấy dữ liệu từ localStorage
  for (let i = 0; i < list.length; i++) {
    if (usernameInput == list[i].username) {
      return true;
    }
  }
  wornguser.innerHTML="worng username"
  toggle()
  return false;
}

function checkLoginPassword(passwordInput) {
  console.log(passwordInput);
  if (passwordInput == "") {
    passwordempty.innerHTML="password empty"
    toggle()
    return false;
  }

  let list = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < list.length; i++) {
    if (passwordInput == list[i].password) {
      return true;
    }
  }
  worngpass.innerHTML="worng password"
  toggle()
  return false;
}
function checkemail(emailinput) {
    
    if (emailinput == "") {
      emailempt.innerHTML="email empty"
      toggle()
      return false;
      
    }
  
    let list = JSON.parse(localStorage.getItem("listUser")); // lấy dữ liệu từ localStorage
    for (let i = 0; i < list.length; i++) {
      if (emailinput == list[i].email) {
        return true;
      }
    }
    worngemail.innerHTML="worng email"
    toggle()
    return false;
  }
function toggle(){
  popup.classList.toggle('hide')
}

iconclose.addEventListener('click', toggle)
popup.addEventListener('click' , function(e)  {
  if(e.target == e.currentTarget){
    toggle()
  }
})