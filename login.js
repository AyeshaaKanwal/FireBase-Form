import{
    auth, 
    signInWithEmailAndPassword,
    }from "./firebase.js"


    let signin = () => {
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user", user);
            window.location.href = "home.html";
            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log("error", error.message);
            
          });
      };
      let signinbtn = document.getElementById("signinbtn");
      if (signinbtn) {
        signinbtn.addEventListener("click", signin);
      } else {
        console.error("Signin button not found!");
      }