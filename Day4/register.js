import Login from "./login"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


class Register {
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $submitBtn
    $gotoSigninLink
constructor() {
    this.$emailInputEmail = document.createElement("input"); // <input> </input>
    this.$emailInputEmail.type = "email"; // <input type="email"> </input>
    this.$emailInputEmail.placeholder = "Enter your email ..."; // <input type="email" placeholder="Enter your email ..."> </input>

    this.$nameInputTxt = document.createElement("input");
    this.$nameInputTxt.type = "text";
    this.$nameInputTxt.placeholder = "Enter your name ...";


    this.$confirmPassInputPass = document.createElement("input");
    this.$confirmPassInputPass.type ="password";
    this.$confirmPassInputPass.placeholder = "confirm your password..";

    this.$submitBtn = document.createElement("button");
    this.$submitBtn.type = "submit";
    this.$submitBtn.innerHTML = " Register";
    this.$submitBtn,addEventListener("click" , this.handleSuibmit);
    
    this.$gotoSigninLink = document.createElement("a")
    this.$gotoSigninLink.innerHTML=" you already have an account? , sig in now ";
    this$goto

    this.$containerDiv = document.createElement("div");
    this.$containerDiv.classList.add("center", "app");


    this.$titleHeader = document.createElement("h2");
    this.$titleHeader.innerHTML = "create your account";

    this.$signupForm = document.createElement("form")
 }
   initRender = (container) => {
     this.$signupForm.appendChild(this.$emailInputEmail);
     this.$signupForm.appendChild(this.$nameInputTxt);
     this.$signupForm.appendChild(this.$passInputPass);
     this.$signupForm.appendChild(this.$confirmPassInputPass);
     this.$signupForm.appendChild(this.$submitBtn);

     this.$containerDiv.appendChild(this.$titleHeader);
     this.$containerDiv.appendChild(this.$signupForm);
     this.$containerDiv.appendChild(this.$gotoSigninLink);

     container.appendChild(this.$containerDiv);


   }


   handleSubmit = (e) => {
    e.preventDefault();
    const email = this.$emailInputEmail.value;
    const password = this.$passInputPass.value;
    const confirm = this.$confirmPassInputPass.value;
    const userName = this.$nameInputTxt.value;

    if(email== ""){
      alert("email can not be empty");
      return;
    }
    if(password.lenght < 6 ){
      alert("password ...");
      return;
    }
    if(userName== ""){
      alert("UserName can not be empty");
      return;
    }
    if(confirmPass== ""){
      alert("confirm your password");
      return;
    }
    if(password != confirmPass){
      alert("your password not match")
    }
    

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
   }
 
   gotoSignin = () =>{
     const login = new login();
     
   }
} 

export default Register;