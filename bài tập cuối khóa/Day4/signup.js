const regContainer = document.createElement("div");
regContainer.classList.add('regis');


const title =document.createElement("h3");
title.innerHTML = "create your account";


const emailInput = document.createElement("input");
emailInput.placeholder = "Enter your email";

const nameInput = document.createElement("input");
nameInput.placeholder = "Enter your name";

const passInput = document.createElement("input");
passInput.placeholder = "Enter your password";
passInput.type="password";

const confirmPassInput = document.createElement("input");
confirmPassInput.type="password";
confirmPassInput.placeholder = "Enter your password";

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value= " Register"

const linkToLogin= document.createElement("a");
linkToLogin.innerHTML="you already had an account?"



regContainer.appendChild(title);
regContainer.appendChild(emailInput);
regContainer.appendChild(nameInput);
regContainer.appendChild(passInput);
regContainer.appendChild(confirmPassInput);
regContainer.appendChild(title);

const regForm = document.createElement("from")
regForm.appendChild(regContainer)

const app = document.getElementById("app")