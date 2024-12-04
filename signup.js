import{
auth, 
createUserWithEmailAndPassword,
}from "./firebase.js"


let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (!email || !password) {
      console.error("Email or password element not found!");
      return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
        alert("SignUp Successful");
        window.location.href = "home.html";
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  let signupbtn = document.getElementById("signupbtn");
  if (signupbtn) {
    signupbtn.addEventListener("click", signup);
  } else {
    console.error("Signup button not found!");
  }