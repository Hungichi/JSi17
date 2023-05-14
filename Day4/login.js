import Register from "./register"

class Login {
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $submitBtn
    $gotoSigninLink

    constructor(){
        this.$emailInputEmail = document.createElement("input"); 
        this.$emailInputEmail.type = "email"; 
        this.$emailInputEmail.placeholder = "Enter your email ..."; 

        this.$passInputPass = document.createElement("input");
        this.$passInputPass.type = "text";
        this.$passInputPass.placeholder = " enter your password";

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
        this.$signupForm.appendChild(this.$submitBtn);
   
        this.$containerDiv.appendChild(this.$titleHeader);
        this.$containerDiv.appendChild(this.$signupForm);
        this.$containerDiv.appendChild(this.$gotoSigninLink);
   
        container.appendChild(this.$containerDiv);
   
    }
    handleSubmit = (e) => {
 
    }
  
    gotoSignin = () =>{
      const login = new login();
      app.changeActiveScreen(signup)
    }
 } 
export default Login;